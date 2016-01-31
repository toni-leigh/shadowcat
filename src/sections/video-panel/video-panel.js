var VideoPanel = React.createClass({
  render: function() {
    return (
      <div className='video-panel background background--blacker'>
        <SectionHeadingWithStrapline heading={this.props.heading} strapline={this.props.strapline} />
        <VideoPlayer src={this.props.src} />
      </div>
    )
  }
});
