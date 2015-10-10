var NavigationLink = React.createClass({
  navLiClass: function() {
    return 'navigation__item navigation__item--' + this.props.slug;
  },
  navLinkClass: function() {
    return 'navigation__link navigation__link--' + this.props.slug;
  },
  navUrl: function() {
    return '/' + this.props.slug + '.html';
  },
  render: function() {
    return (
      <li className={this.navLiClass()}>
        <a className={this.navLiClass()} href={this.navUrl()}>
          {this.props.name}
        </a>
      </li>
    )
  }
});
