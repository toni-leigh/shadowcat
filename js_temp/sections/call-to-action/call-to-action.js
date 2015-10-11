var CallToAction = React.createClass({displayName: "CallToAction",
  render: function() {
    return (
      React.createElement("div", {className: "background background--orange-dark"}, 
        React.createElement("article", {className: "content-is-centred call-to-action"}, 
          React.createElement("h1", {className: "call-to-action__heading"}, this.props.heading), 
          React.createElement("a", {className: "call-to-action__button", href: this.props['button-slug'] + '.html'}, this.props['button-text'])
        )
      )
    )
  }
});
