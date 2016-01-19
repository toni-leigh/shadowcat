var ImageThumbnail = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <div className={'image-thumbnail image-thumbnail__' + this.props['colour']}>
        <div className='image-thumbnail__viewer' style={{backgroundImage: 'url(' + this.props['image-src'] + ')'}}>
          <i className={'icon full-screen--' + this.props['colour']} />
        </div>
      </div>
    )
  }
});
