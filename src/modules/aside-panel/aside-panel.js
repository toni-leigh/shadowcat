var AsidePanel = React.createClass({
  getButton: function() {
    var button = null;
    if (this.props['aside-type'] =='signpost') {
      button = <a className='aside-panel__link button' href={this.props['slug']}>{this.props['link-text']}</a>
    }
    return button;
  },
  getImage: function() {
    var image = null;
    if (this.props['aside-type'] =='image') {
      image = <img className='aside-panel__image' src={'http://shadowcatfilms.com/' + this.props['image-src']} />
    }
    return image;
  },
  hoverOverride: function() {
    hoverOverride = '';
    if (this.props['aside-type'] =='info') {
      hoverOverride = 'aside-panel__details--always-shown';
    }
    return hoverOverride;
  },
  render: function() {
    return (
      <section className={'aside-panel aside-panel--' + this.props['type'] + ' ' + this.props['layout-class']}>
        {this.getImage()}
        <div className={'aside-panel__details ' + this.hoverOverride()}>
          <h2 className='aside-panel__heading'>{this.props['heading']}</h2>
          <p className='aside-panel__text'>{this.props['text']}</p>
          {this.getButton()}
        </div>
      </section>
    )
  }
});
