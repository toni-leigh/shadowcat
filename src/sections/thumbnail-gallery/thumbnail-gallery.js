var ThumbnailGallery = React.createClass({
  buildThumbnails: function() {
    var props = this.props;
    var images = props['images'];
    var rows = [];
    var x = 0;
    images.forEach(function(image) {
      rows.push(
        <ImageThumbnail
          colour={props['colour']}
          key={'proj' + x}
          image-src={"http://shadowcatfilms.co.uk/user_img/" + image.user_id + "/" + image.image_filename + "t400" + image.image_ext} />
      );
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <div className='thumbnail-gallery content-is-centred'>
        <SectionHeadingWithStrapline heading={this.props['gallery-heading']} strapline={this.props['gallery-strapline']} />
        {this.buildThumbnails()}
      </div>
    )
  }
});
