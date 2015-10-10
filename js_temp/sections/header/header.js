var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("header", {className: "page-section header"}, 
        React.createElement("div", {className: "content-is-centred"}, 
          React.createElement(Logo, null), 
          React.createElement("div", {className: "header__business-name"}, "Shadowcat Films"), 
          React.createElement(Navigation, {selected: this.props['page-slug']})
        )
      )
    )
  }
});
