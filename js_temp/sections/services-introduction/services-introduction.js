var ServicesIntroduction = React.createClass({displayName: "ServicesIntroduction",
  getButtonDetails: function() {
    return {
      1: {
        name: 'Documentaries',
        slug: 'documentaries'
      },
      2: {
        name: 'Video Production',
        slug: 'video-production'
      }
    };
  },
  render: function() {
    return (
      React.createElement("article", {className: "services-introduction content-is-centred"}, 
        React.createElement("h1", {className: "services-introduction__heading"}, "Find out all about our services"), 
        React.createElement(ButtonPair, {"link-details": this.getButtonDetails()}), 
        React.createElement("div", {className: "services-introduction__text"}, 
          React.createElement("p", null, 
            "Flexitarian single-origin coffee health goth Williamsburg, before they sold out fanny pack trust f" + ' ' +
            "und banh mi. Flexitarian keytar biodiesel flannel Marfa tote bag. Quinoa aesthetic plaid put a bird" + ' ' +
            "on it, fap Pinterest hoodie deep v brunch twee authentic normcore Portland letterpress."
          ), 
          React.createElement("p", null, 
            "Williamsburg, before they sold out fanny pack trust fund banh mi.Flexitarian single-origin coffee" + ' ' +
            "health goth  Flexitarian keytar biodiesel flannel Marfa tote bag. Quinoa aesthetic plaid put a" + ' ' +
            "bird on it, fap Pinterest hoodie deep v brunch twee authentic normcore Portland letterpress."
          ), 
          React.createElement("p", null, 
            "Quinoa aesthetic plaid put a bird on it, fap Pinterest hoodie deep v brunch twee authentic normcore" + ' ' +
            "Portland letterpress. Flexitarian single-origin coffee health goth Williamsburg, before they sold" + ' ' +
            "out fanny pack trust fund banh mi. Flexitarian keytar biodiesel flannel Marfa tote bag. Flexitarian" + ' ' +
            "single-origin coffee health goth Williamsburg, before they sold out."
          )
        )
      )
    )
  }
});
