var Header = React.createClass({
  render: function() {
    return (
      <header className='page-section header'>
        <div className='content-is-centred'>
          <Logo />
          <div className='header__business-name'>Shadowcat Films</div>
          <Navigation selected={this.props['page-slug']} />
        </div>
      </header>
    )
  }
});
