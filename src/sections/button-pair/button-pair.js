var ButtonPair = React.createClass({
  render: function() {
    return (
      <div className='button-pair'>
        <a className='button-pair__button button-pair__button-1 button' href={'/' + this.props['link-details'][1].slug + '.html'}>{this.props['link-details'][1].name}</a>
        <a className='button-pair__button button-pair__button-2 button' href={'/' + this.props['link-details'][2].slug + '.html'}>{this.props['link-details'][2].name}</a>
      </div>
    )
  }
});
