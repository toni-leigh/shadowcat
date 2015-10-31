var VideoPanel = React.createClass({
  render: function() {
    return (
      <div className='video-panel background background--blacker'>
        <SectionHeadingWithStrapline heading='Documentaries Showreel Video' strapline='A collection of excerpts from our documentary films' />
        <Video src={this.props.src} />
      </div>
    )
  }
});
