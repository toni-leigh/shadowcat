var Home = React.createClass({displayName: "Home",
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

  getButtonDetails: function() {
    return {
      1: {
        name: 'Documentaries',
        slug: 'documentaries'
      },
      2: {
        name: 'Video Production',
        slug: 'video-production'
      }
    };
  },

  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement(BlogPostSmall, {heading: "Portland letterpress", date: "24th Sept. 2015", text: "Leggings try-hard mustache Helvetica, viral sriracha tofu wayfarers synth lumbersexual PBR&B fingerstache asymmetrical Bushwick. Scenester street art VHS, McSweeneys banjo pork belly deep v typewriter Carles four dollar toast tofu letterpress occupy stumptown"}), 
        React.createElement(AsidePanel, {heading: "City Project", "image-src": "assets/img/city.jpg", slug: "documentary/1", "link-text": "View project", type: "documentary", text: "Deep v you probably havent heard of them dreamcatcher, kitsch artisan listicle"}), 
        React.createElement(AsidePanel, {heading: "Natural World", "image-src": "assets/img/nature.jpg", slug: "video-production/2", "link-text": "View project", type: "video-production", text: "Shoreditch readymade synth. Cold-pressed small batch vinyl, kitsch tilde hashtag squid try-hard."}), 
        React.createElement(ButtonPair, {"link-details": this.getButtonDetails()}), 
        React.createElement(SectionHeadingWithStrapline, {heading: "Blog Latest", strapline: "These are the latest posts from our blog"}), 
        React.createElement(NavigationLink, {slug: 'test', name: 'Test', selected: true}), 
        React.createElement(NavigationLink, {slug: 'me', name: 'Navigation', selected: false}), 
        React.createElement(NavigationLink, {slug: 'basket', name: 'basket', selected: false}), 
        React.createElement("a", {className: "button-pair__button button-pair__button-1 button", href: '/this.html'}, "Button"), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/sriracha'}, "sriracha"), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/wayfarers'}, "wayfarers"), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/fingerstache'}, "fingerstache"), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/asymmetrical'}, "asymmetrical"), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/Scenester'}, "Scenester")
      )
    )
  }
});
