var VideoSpotlight = React.createClass({displayName: "VideoSpotlight",
  render: function() {
    return (
      React.createElement("div", {className: "content-is-centred"}, 
        React.createElement("iframe", {className: "video-spotlight", src: this.props.src, frameborder: "0", webkitallowfullscreen: true, mozallowfullscreen: true, allowfullscreen: true})
      )
    )
  }
});
