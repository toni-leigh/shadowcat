var ThumbnailGallery = React.createClass({
  buildThumbnails: function() {
    var props = this.props,
        callback = this.setLightboxShownState,
        thumbnails = [],
        x = 0;
    props['images']['all'].forEach(function(image) {
      thumbnails.push(
        <ImageThumbnail
          colour={props['colour']}
          image={image}
          image-index={x}
          key={'proj' + x}
          thumbnail-gallery-callbacks__is-shown={callback} />
      );
      x ++;
    });
    return thumbnails;
  },

  getInitialState: function() {
    return {
      lightboxIsShown: false,
      image: '',
      imageWidth: 300
    }
  },

  setLightboxShownState: function(clicked) {
    var imageIndex = parseInt(clicked.currentTarget.dataset.imageIndex,10);
    if (!isNaN(imageIndex)) {
      this.state.image = this.props['images']['all'][imageIndex];
    }
    this.state.lightboxIsShown ? this.setState({lightboxIsShown: false}) : this.setState({lightboxIsShown: true});
  },

  render: function() {
    return (
      <div className='thumbnail-gallery content-is-centred'>
        <SectionHeadingWithStrapline
          heading={this.props['gallery-heading']}
          strapline={this.props['gallery-strapline']} />
        {this.buildThumbnails()}
        <Lightbox
          is-shown={this.state.lightboxIsShown}
          thumbnail-gallery-callbacks__is-shown={this.setLightboxShownState}
          image={this.state.image} />
      </div>
    )
  }
});
