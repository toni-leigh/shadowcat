var Lightbox = React.createClass({
  /*
    triggered when a thumbnail is clicked and the lightbox is shown, therefore, the image must
      be set
  */
  componentDidUpdate: function() {
    this.setImage();
  },

  /*
    @return {String} a string, possibly empty, which will contain the class that will show the
      lightbox
  */
  getLightboxShownClass: function() {
    return this.props['is-shown'] ? 'lightbox--is-shown' : '';
  },

  /*
    sets an image based on the aspect ratio, the viewport size and the set of available image sizes
      provided by the CMS - the next image size up beyond the available width will be chosen to
      maximise clarity and minimise bandwidth
  */
  setImage: function() {
    var image = this.props['image'];
    for (var x = 0; x < ImageScaler.scaledWidths.length; x ++) {
      if (ImageScaler.nextSizeUpIsSensible(x, image.ratio)) {
        document.getElementById('js-update-image').src = Utilities.formatImageSrc(image, x + 1);
      }
    }
  },

  render: function() {
    return (
      <div className={'lightbox ' + this.getLightboxShownClass()}>
        <i className='icon close' onClick={this.props['thumbnail-gallery-callbacks__is-shown']} />
        <img id='js-update-image' className='lightbox__image' src='' />
      </div>
    )
  }
});
