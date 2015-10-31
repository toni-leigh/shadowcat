var VideoPanel = React.createClass({
  render: function() {
    return (
      <div className='video-panel'>
        <Video src={this.props.src} />
      </div>
    )
  }
});
