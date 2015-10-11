var ButtonPair = React.createClass({displayName: "ButtonPair",
  render: function() {
    return (
      React.createElement("div", {className: "button-pair"}, 
        React.createElement("a", {className: "button-pair__button button-pair__button-1 button", href: '/' + this.props['link-details'][1].slug + '.html'}, this.props['link-details'][1].name), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/' + this.props['link-details'][2].slug + '.html'}, this.props['link-details'][2].name)
      )
    )
  }
});
