var Home = React.createClass({displayName: "Home",
  componentDidMount: function() {
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
        "Testings Niblet Ings Ington"
      )
    )
  }
});
