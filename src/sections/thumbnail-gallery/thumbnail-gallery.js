var ThumbnailGallery = React.createClass({
  buildThumbnails: function() {
    var props = this.props;
    var images = props['images'];
    var callback = this.setLightboxShownState;
    var rows = [];
    var x = 0;
    images.forEach(function(image) {
      rows.push(
        <ImageThumbnail
          colour={props['colour']}
          image-src={"http://shadowcatfilms.co.uk/user_img/" + image.user_id + "/" + image.image_filename + "t400" + image.image_ext}
          key={'proj' + x}
          is-shown-callback={callback} />
      );
      x ++;
    });
    return rows;
  },

  getInitialState: function() {
    return {
      lightboxIsShown: false
    }
  },

  setLightboxShownState: function() {
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
          is-shown-callback={this.setLightboxShownState} />
      </div>
    )
  }
});
