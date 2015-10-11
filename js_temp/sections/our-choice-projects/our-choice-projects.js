var OurChoiceProjects = React.createClass({displayName: "OurChoiceProjects",
  render: function() {
    return (
      React.createElement("article", {className: "our-choice-projects content-is-centred"}, 
        React.createElement("h1", {className: "our-choice-projects__heading"}, "Our choice projects"), 
        React.createElement("div", {className: "our-choice-projects__choices"}, 
          React.createElement(AsidePanel, {heading: "City Project", "image-src": "assets/img/city.jpg", slug: "documentary/1", "link-text": "View project", type: "documentary", text: "Deep v you probably havent heard of them dreamcatcher, kitsch artisan listicle"}), 
          React.createElement(AsidePanel, {heading: "People have long titles sometimes", "image-src": "assets/img/people1.jpg", slug: "documentary/2", "link-text": "View project", type: "documentary", text: "Marfa iPhone Wes Anderson wayfarers flexitarian. Hashtag Banksy church-key, slow-carb art party."}), 
          React.createElement(AsidePanel, {heading: "Business Promotion", "image-src": "assets/img/business.jpg", slug: "documentary/3", "link-text": "View project", type: "documentary", text: "Tote bag sustainable cardigan blog Brooklyn, bespoke normcore pork belly Blue Bottle."}), 
          React.createElement(AsidePanel, {heading: "Motor Sports Day", "image-src": "assets/img/sport.jpg", slug: "video-production/1", "link-text": "View project", type: "video-production", text: "PBR&B photo booth Banksy Marfa aesthetic, chambray polaroid selfies lo-fi Truffaut viral brunch."}), 
          React.createElement(AsidePanel, {heading: "Natural World", "image-src": "assets/img/nature.jpg", slug: "video-production/2", "link-text": "View project", type: "video-production", text: "Shoreditch readymade synth. Cold-pressed small batch vinyl, kitsch tilde hashtag squid try-hard."}), 
          React.createElement(AsidePanel, {heading: "Abstract Artists", "image-src": "assets/img/abstract.jpg", slug: "video-production/3", "link-text": "View project", type: "video-production", text: "Pinterest biodiesel freegan aesthetic brunch. Cray YOLO Pitchfork keffiyeh. "})
        )
      )
    )
  }
});
