var Contact = React.createClass({displayName: "Contact",
  render: function() {
    return (
      React.createElement("div", {className: "background background--blue-dark"}, 
        React.createElement("div", {className: "contact content-is-centred"}, 
          React.createElement(SectionHeadingWithStrapline, {heading: "Get In Touch", strapline: "Please use any of the methods below to get in touch. We’d love to hear from you about anything."}), 
          React.createElement("form", {className: "contact__form"}, 
            React.createElement("label", {for: "name", className: "contact__form-label"}, "Name:"), 
            React.createElement("input", {id: "name", className: "contact__form-input", type: "text", placeholder: "Enter your name"}), 
            React.createElement("label", {for: "telephone", className: "contact__form-label"}, "Telephone:"), 
            React.createElement("input", {id: "telephone", className: "contact__form-input", type: "text", placeholder: "Enter your telephone number"}), 
            React.createElement("label", {for: "email", className: "contact__form-label"}, "Email:"), 
            React.createElement("input", {id: "email", className: "contact__form-input", type: "text", placeholder: "you@example.com"}), 
            React.createElement("label", {for: "message", className: "contact__form-label"}, "Message:"), 
            React.createElement("textarea", {id: "message", className: "contact__form-input contact__form-textarea", type: "text", placeholder: "Your message"}
            ), 
            React.createElement("button", {className: "contact__form-submit button"}, "Send contact")
          ), 
          React.createElement("div", {className: "contact__details"}, 
            React.createElement(Map, null), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Managing Director"), 
              React.createElement("p", {className: "contact__detail-body"}, "Alysoun Sharpe")
            ), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Telephone"), 
              React.createElement("p", {className: "contact__detail-body"}, React.createElement("a", {href: "tel:01234567890"}, "01234 567 890"))
            ), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Address"), 
              React.createElement("p", {className: "contact__detail-body"}, 
                "3 The Street,", React.createElement("br", null), 
                "A Little Town Somewhere,", React.createElement("br", null), 
                "That County,", React.createElement("br", null), 
                "AB12 3CD"
              )
            ), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Email"), 
              React.createElement("p", {className: "contact__detail-body"}, React.createElement("a", {href: "mailto:email@shadowcatfilms.co.uk"}, "email@shadowcatfilms.co.uk"))
            )
          )
        )
      )
    )
  }
});
