var Lightbox = React.createClass({
  getLightboxShownClass: function() {
    return this.props['is-shown'] ? 'lightbox--is-shown' : '';
  },

  render: function() {
    return (
      <div className={'lightbox ' + this.getLightboxShownClass()}>
      </div>
    )
  }
});
