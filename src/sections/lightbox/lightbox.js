var Lightbox = React.createClass({
  getLightboxShownClass: function() {
    return this.props['is-shown'] ? 'lightbox--is-shown' : '';
  },

  render: function() {
    var image = this.props['image'];
    var image_src = "http://shadowcatfilms.co.uk/user_img/" + image.user_id + "/" + image.image_filename + "s1920" + image.image_ext;
    return (
      <div className={'lightbox ' + this.getLightboxShownClass()}>
        <i className='icon close' onClick={this.props['is-shown-callback']} />
        <img className='lightbox__image' src={image_src} />
      </div>
    )
  }
});
