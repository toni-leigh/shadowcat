var Header = React.createClass({
  render: function() {
    return (
      <header className='content-is-centred header'>
        <Logo />
        <div className='header__business-name'>Shadowcat Films</div>
        <Navigation nav-items={this.props['nav-items']} selected={this.props['page-slug']} />
      </header>
    )
  }
});
