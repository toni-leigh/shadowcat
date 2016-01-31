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
          scrollPointPassed = ScrollMeasures.bodyTop() > trigger.scrollPoint;

      if (scrollPointPassed && classNotAdded) {
        trigger.target.className = trigger.target.className + ' ' + trigger.classAttr;
      }
    }
  }
}

ImageScaler = {
  /*
    @param aspectRatio {number} the image aspect ratio
    @return {number} the largest width the image could have for this viewport while maintaining
      it's aspect ratio
  */
  getImageMaxWidth: function(aspectRatio) {
    return Math.min(Utilities.getDimension('width'), Utilities.getDimension('height') * aspectRatio);
  },

  /*
    @param {number} scaleWidthsIndex
    @param {number} aspectRatio
    @return {Boolean} whether or not it's sensible to use the next avaiable image width up the scale
      if the next image up is still smaller than the largest size the image can be while fitting the viewport
      this function will return true
  */
  nextSizeUpIsSensible: function(scaleWidthsIndex, aspectRatio) {
    var maxWidth = this.getImageMaxWidth(aspectRatio);
    return !isNaN(this.scaledWidths[scaleWidthsIndex + 1]) && maxWidth > this.scaledWidths[scaleWidthsIndex] && maxWidth < this.scaledWidths[scaleWidthsIndex + 1];
  },

  /*
    {Array} available scaled widths supplied by CMS
  */
  scaledWidths: [
    300,
    460,
    740,
    940,
    1280,
    1400,
    1920
  ]
}

ScrollMeasures = {
  bodyTop: function() {
    return Math.abs(document.body.getBoundingClientRect().top);
  },

  getOffSet: function(trigger) {
    var elTop = trigger.getBoundingClientRect().top;
    return this.bodyTop() + elTop;
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

  capitaliseFirstLetter: function(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
  },

  /*
    @param {Object} image, contains all the data for an image
    @param {number} scaleWidthsIndex, the index of the scale width to use
    @return {String} a fully formed URI for the image
  */
  formatImageSrc: function(image, scaleWidthsIndex) {
    var imageFileName = image.image_filename + "s" + ImageScaler.scaledWidths[scaleWidthsIndex] + image.image_ext;
    return "http://shadowcatfilms.co.uk/user_img/" + image.user_id + "/" + imageFileName;
  },

  /*
    @param {String} axis, either 'height' or 'width'
    @return {number} the viewport size in pixels for the axis
  */
  getDimension: function(axis) {
    axis = Utilities.capitaliseFirstLetter(axis);
    return Math.max(document.documentElement['client' + axis], window['inner' + axis] || 0) * 0.95
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
