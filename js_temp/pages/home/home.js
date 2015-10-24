var Home = React.createClass({displayName: "Home",
  componentDidMount: function() {
    debugger;
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("src", this.props['api-source']);
    head.appendChild(script);
  },
  getInitialState: function() {
    return {
      navItems: [
        {
          name: 'Home',
          slug: 'index',
          selected: true
        },
        {
          name: 'Documentaries',
          slug: 'documentaries',
          selected: false
        },
        {
          name: 'Video Production',
          slug: 'video-production',
          selected: false
        },
        {
          name: 'Contact',
          slug: 'contact',
          selected: false
        },
        {
          name: 'Blog',
          slug: 'blog',
          selected: false
        },
        {
          name: 'Products',
          slug: 'products',
          selected: false
        },
        {
          name: 'Basket',
          slug: 'basket',
          selected: false
        }
      ]
    };
  },

  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement("div", {className: "home__top-wrapper"}, 
          React.createElement(Header, {"page-slug": "home", "nav-items": this.state.navItems}), 
          React.createElement(VideoSpotlight, {src: "//player.vimeo.com/video/95396328"}), 
          React.createElement(ServicesIntroduction, null), 
          React.createElement(OurChoiceProjects, null), 
          React.createElement(CallToAction, {heading: "Looking for our spotlight product?", "button-text": "Get a DVD Copy", "button-slug": "products"}), 
          React.createElement(BlogSmall, null), 
          React.createElement(Contact, null), 
          React.createElement(Footer, null)
        )
      )
    )
  }
});
