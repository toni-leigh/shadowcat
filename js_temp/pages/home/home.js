var Home = React.createClass({displayName: "Home",
  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement("div", {className: "home__top-wrapper"}, 
          React.createElement(Header, {"page-slug": "home"})
        )
      )
    )
  }
});
