var Header = React.createClass({
  render: function() {
    return (
      <header className='content-is-centred header'>
        <Logo />
        <div className='header__business-name'>Shadowcat Films</div>
        <Navigation selected={this.props['page-slug']} />
      </header>
    )
  }
});
