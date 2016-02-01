var AsidePanel = React.createClass({
  getButton: function() {
    var button = null;
    if (this.props['aside-type'] =='signpost') {
      button = <a className='aside-panel__link button' href={this.props['slug']}>{this.props['link-text']}</a>
    }
    return button;
  },

  getHeading: function() {
    var heading = null;
    if (this.props['heading'] !== '') {
      heading = <h2 className='aside-panel__heading'>{this.props['heading']}</h2>
    }
    return heading;
  },

  getImage: function() {
    var image = null;
    if (this.props['aside-type'] =='image' || this.props['aside-type'] =='signpost') {
      image = <img className='aside-panel__image' src={this.props['image-src']} />
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
      <section className={'aside-panel aside-panel--' + this.props['type'] + ' ' + this.props['layout-class'] + ' ' + this.props['colour']} >
        {this.getImage()}
        <div className={'aside-panel__details ' + this.hoverOverride()}>
          {this.getHeading()}
          <div className='aside-panel__text' dangerouslySetInnerHTML={{__html: this.props['text']}}></div>
          {this.getButton()}
        </div>
      </section>
    )
  }
});
