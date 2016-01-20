var Lightbox = React.createClass({
  getLightboxShownClass: function() {
    return this.props['is-shown'] ? 'lightbox--is-shown' : '';
  },

  render: function() {
    return (
      <div className={'lightbox ' + this.getLightboxShownClass()}>
        <i className='icon close' onClick={this.props['is-shown-callback']} />
      </div>
    )
  }
});
