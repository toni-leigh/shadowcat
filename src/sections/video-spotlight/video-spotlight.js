var VideoSpotlight = React.createClass({
  render: function() {
    return (
      <div className='content-is-centred'>
        <iframe className='video-spotlight' src={this.props.src} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    )
  }
});
