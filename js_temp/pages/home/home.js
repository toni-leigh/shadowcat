var Home = React.createClass({displayName: "Home",
  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement("div", {className: "home__top-wrapper"}, 
          React.createElement(Header, {"page-slug": "home"}), 
          React.createElement(VideoSpotlight, {src: "//player.vimeo.com/video/95396328"}), 
          React.createElement(ServicesIntroduction, null), 
          React.createElement(OurChoiceProjects, null), 
          React.createElement(CallToAction, {heading: "Looking for our spotlight product?", "button-text": "Get a DVD Copy", "button-slug": "products"})
        )
      )
    )
  }
});
