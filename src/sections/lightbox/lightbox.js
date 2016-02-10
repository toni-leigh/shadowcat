var Lightbox = React.createClass({
  /*
    @return {String} a string, possibly empty, which will contain the class that will show the
      lightbox
  */
  getLightboxShownClass: function() {
    return this.props['is-shown'] ? 'lightbox--is-shown' : '';
  },

  render: function() {
    return (
      <div className={'lightbox ' + this.getLightboxShownClass()}>
        <i className='icon close' onClick={this.props['thumbnail-gallery-callbacks__is-shown']} />
        <img id='js-update-image' className='lightbox__image' src={Utilities.formatImageSrc(this.props['image'], this.props['scale'])} />
        <a className='lightbox__scroller lightbox__scroller-next' href='#' onClick={this.props['thumbnail-gallery-callbacks__next-image']}>next</a>
        <a className='lightbox__scroller lightbox__scroller-previous' href='#' onClick={this.props['thumbnail-gallery-callbacks__previous-image']}>previous</a>
      </div>
    )
  }
});
