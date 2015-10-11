var BlogPostSmall = React.createClass({displayName: "BlogPostSmall",
  render: function() {
    return (
      React.createElement("article", {className: "blog-small__post"}, 
        React.createElement("h1", {className: "blog-small__post-date"}, this.props.heading), 
        React.createElement("span", {className: "blog-small__post-date"}, this.props.date), 
        React.createElement("div", {className: "blog-small__post-text"}, 
          this.props.text
        )
      )
    )
  }
});
