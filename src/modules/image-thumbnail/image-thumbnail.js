var ImageThumbnail = React.createClass({
  render: function() {
    image_src = "http://shadowcatfilms.co.uk/user_img/" + this.props['image'].user_id + "/" + this.props['image'].image_filename + "t400" + this.props['image'].image_ext;
    return (
      <div
        className={'image-thumbnail image-thumbnail__' + this.props['colour']}
        data-image-index={this.props['image-index']}
        onClick={this.props['is-shown-callback']} >
        <div className='image-thumbnail__viewer' style={{backgroundImage: 'url(' + image_src + ')'}}>
          <i className={'icon full-screen--' + this.props['colour']} />
        </div>
      </div>
    )
  }
});
