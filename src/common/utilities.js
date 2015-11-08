window.Utilities = {
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
