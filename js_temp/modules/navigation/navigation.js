var Navigation = React.createClass({displayName: "Navigation",
  buildList: function() {
    var navItems = this.props['nav-items'];
    var rows = [];
    var x = 0;
    navItems.forEach(function(navItem) {
      rows.push(React.createElement(NavigationLink, {key: 'nav' + x, slug: navItem.slug, name: navItem.name, selected: navItem.selected}));
      x ++;
    });
    return rows;
  },

  getInitialState: function() {
    return({
      'open': false
    });
  },

  openClass: function() {
    return this.state.open ? 'is-open' : 'is-closed';
  },

  slideMenu: function() {
    this.state.open = this.state.open ? false : true;
    this.setState(this.state);
  },

  render: function() {
    return (
      React.createElement("nav", {className: 'navigation ' + this.openClass()}, 
        React.createElement("div", {className: "navigation__links"}, 
          React.createElement("ul", null, 
            this.buildList()
          ), 
          React.createElement("div", {className: "navigation__close", onClick: this.slideMenu}, "close")
        ), 
        React.createElement("a", {className: "navigation__trigger button", onClick: this.slideMenu}, "Menu")
      )
    )
  }
});
