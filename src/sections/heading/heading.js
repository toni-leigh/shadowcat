var Heading = React.createClass({
  render: function() {
    return (
      <div className='heading' style={{ backgroundImage: 'url(' + this.props['background'] + ')' }}>
        <div className='heading__tinted-overlay'>
          <div className='heading__content content-is-centred'>
            <h1 className='heading__title'>{this.props['title']}</h1>
            <span className='heading__strapline'>{this.props['strapline']}</span>
          </div>
        </div>
      </div>
    )
  }
});
