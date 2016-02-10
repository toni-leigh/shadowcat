var ThumbnailGallery = React.createClass({
  imageIndex: 0,

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
      image: this.props['images']['all'][0],
      imageWidth: 300
    }
  },

  nextImage: function(e) {
    e.preventDefault();
    this.imageIndex = typeof this.props['images']['all'][this.imageIndex + 1] === 'undefined'
                    ? 0
                    : this.imageIndex + 1;

    this.setImage();
  },

  previousImage: function(e) {
    e.preventDefault();
    this.imageIndex = this.imageIndex === 0
                    ? this.props['images']['all'].length - 1
                    : this.imageIndex - 1;

    this.setImage();
  },

  setImage: function(image) {
    var image = this.props['images']['all'][this.imageIndex];
    this.setState({
      image: image,
      scale: ImageScaler.pickScale(image.ratio)
    });
  },

  setLightboxShownState: function(clicked) {
    this.imageIndex = parseInt(clicked.currentTarget.dataset.imageIndex,10);
    if (!isNaN(this.imageIndex)) {
      this.setImage();
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
          thumbnail-gallery-callbacks__next-image={this.nextImage}
          thumbnail-gallery-callbacks__previous-image={this.previousImage}
          image={this.state.image}
          scale={this.state.scale} />
      </div>
    )
  }
});
