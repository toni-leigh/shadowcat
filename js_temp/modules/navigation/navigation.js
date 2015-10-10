var Navigation = React.createClass({displayName: "Navigation",
  buildList: function() {
    var navItems = this.getNavItems();
    var rows = [];
    var x = 0;
    this.getNavItems().forEach(function(navItem) {
      rows.push(React.createElement(NavigationLink, {key: 'nav' + x, slug: navItem.slug, name: navItem.name, selected: navItem.selected}));
      x ++;
    });
    return rows;
  },

  getNavItems: function() {
    return [
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
    ];
  },

  render: function() {
    return (
      React.createElement("nav", {className: "navigation"}, 
        React.createElement("ul", null, 
          this.buildList()
        )
      )
    )
  }
});
