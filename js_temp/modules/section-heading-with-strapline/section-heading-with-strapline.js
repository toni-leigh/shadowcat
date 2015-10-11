var SectionHeadingWithStrapline = React.createClass({displayName: "SectionHeadingWithStrapline",
  render: function() {
    return (
      React.createElement("div", {class: "section-header"}, 
        React.createElement("h1", {className: "section-header__heading"}, this.props.heading), 
        React.createElement("h2", {className: "section-header__strapline"}, this.props.strapline)
      )
    )
  }
});
