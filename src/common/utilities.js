AnimationTriggers = {
  triggers: [],

  add: function(key, scrollPositionOffset) {
    var trigger = document.querySelectorAll('.animtrig-' + key)[0];
    scrollPoint = ScrollMeasures.getOffSet(trigger);
    this.triggers.push({
      target: trigger,
      classAttr: key + '--animate',
      scrollPoint: (scrollPoint - scrollPositionOffset)
    });
  },

  scrollHandler: function() {
    var triggerCount = AnimationTriggers.triggers.length;

    for (var x = 0; x < triggerCount; x ++) {
      var trigger = AnimationTriggers.triggers[x],
          classNotAdded = trigger.target.className.indexOf(trigger.classAttr) === -1,
          scrollPointPassed = Math.abs(ScrollMeasures.bodyTop()) > trigger.scrollPoint;

      if (scrollPointPassed && classNotAdded) {
        trigger.target.className = trigger.target.className + ' ' + trigger.classAttr;
      }
    }
  }
}

ScrollMeasures = {
  bodyTop: function() {
    return document.body.getBoundingClientRect().top
  },

  getOffSet: function(trigger) {
    var elTop = trigger.getBoundingClientRect().top;
    var bodyTop = this.bodyTop();
    return Math.abs(bodyTop) + elTop;
  }
}

Utilities = {
  apiCall: function(page) {
    window.jsonpCallback = function(data) {
      window.data = data;
    }
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("src", "http://shadowcatfilms.com/api/" + page);
    head.appendChild(script);
  },

  loadReact: function(page) {
    window.onload = function() {
      React.render(
        React.createElement(window[page[0].toUpperCase() + page.slice(1)]),
        document.getElementById('react-' + page)
      );
    }
  }
}

window.onscroll = AnimationTriggers.scrollHandler;
