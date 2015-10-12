var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return (
      React.createElement("div", {className: "background background--black"}, 
        React.createElement("footer", {className: "footer"}, 
          React.createElement("ul", {className: "footer__social"}, 
            React.createElement("li", {className: "footer__social-link"}, React.createElement("a", {href: "#"}, "Facebook")), 
            React.createElement("li", {className: "footer__social-link"}, React.createElement("a", {href: "#"}, "Twitter")), 
            React.createElement("li", {className: "footer__social-link"}, React.createElement("a", {href: "#"}, "Youtube"))
          ), 
          React.createElement("span", {className: "footer__copywrite"}, "© 2015 Shadowcat Films")
        )
      )
    )
  }
});
