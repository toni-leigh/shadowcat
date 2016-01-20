var VideoPlayer = React.createClass({
  render: function() {
    return (
      <div className='content-is-centred'>
        <iframe className='video-player' src={this.props.src} frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
      </div>
    )
  }
});
