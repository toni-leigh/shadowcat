var ImageFixed = React.createClass({
  render: function() {
    return (
      <div className='image-fixed' style={{ backgroundImage: 'url("' + this['props'].src + '")'}}>
        <div className='content-is-centred'>
          <h2 className='image-fixed__heading'><span className='image-fixed__heading-wrapper'>{this['props'].heading}</span></h2>
          <span className='image-fixed__strapline'>{this['props'].strapline}</span>
        </div>
      </div>
    )
  }
});
