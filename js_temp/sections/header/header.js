var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("header", {className: "content-is-centred header"}, 
        React.createElement(Logo, null), 
        React.createElement("div", {className: "header__business-name"}, "Shadowcat Films"), 
        React.createElement(Navigation, {"nav-items": this.props['nav-items'], selected: this.props['page-slug']})
      )
    )
  }
});
