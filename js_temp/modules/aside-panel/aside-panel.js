var AsidePanel = React.createClass({displayName: "AsidePanel",
  render: function() {
    return (
      React.createElement("section", {className: 'aside-panel aside-panel--' + this.props['type']}, 
        React.createElement("img", {className: "aside-panel__image", src: this.props['image-src']}), 
        React.createElement("div", {className: "aside-panel__details"}, 
          React.createElement("h2", {className: "aside-panel__heading"}, this.props['heading']), 
          React.createElement("p", {className: "aside-panel__text"}, this.props['text']), 
          React.createElement("a", {className: "aside-panel__link button", href: this.props['slug']}, this.props['link-text'])
        )
      )
    )
  }
});
