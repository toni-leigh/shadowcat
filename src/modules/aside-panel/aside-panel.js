var AsidePanel = React.createClass({
  render: function() {
    return (
      <section className={'aside-panel aside-panel--' + this.props['type']}>
        <img className='aside-panel__image' src={'http://shadowcatfilms.com/' + this.props['image-src']} />
        <div className='aside-panel__details'>
          <h2 className='aside-panel__heading'>{this.props['heading']}</h2>
          <p className='aside-panel__text'>{this.props['text']}</p>
          <a className='aside-panel__link button' href={this.props['slug']}>{this.props['link-text']}</a>
        </div>
      </section>
    )
  }
});
