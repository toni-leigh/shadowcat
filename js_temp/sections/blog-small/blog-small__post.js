var BlogPostSmall = React.createClass({displayName: "BlogPostSmall",
  render: function() {
    return (
      React.createElement("article", {className: "blog-small__post text"}, 
        React.createElement("h1", {className: "blog-small__post-heading"}, this.props.heading), 
        React.createElement("span", {className: "blog-small__post-date"}, this.props.date), 
        React.createElement("div", {className: "blog-small__post-text"}, 
          React.createElement("p", null, this.props.text)
        )
      )
    )
  }
});
