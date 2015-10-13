var Navigation = React.createClass({
  buildList: function() {
    var navItems = this.props['nav-items'];
    var rows = [];
    var x = 0;
    navItems.forEach(function(navItem) {
      rows.push(<NavigationLink key={'nav' + x} slug={navItem.slug} name={navItem.name} selected={navItem.selected}/>);
      x ++;
    });
    return rows;
  },

  getInitialState: function() {
    return({
      'open': false
    });
  },

  openClass: function() {
    return this.state.open ? 'is-open' : 'is-closed';
  },

  slideMenu: function() {
    this.state.open = this.state.open ? false : true;
    this.setState(this.state);
  },

  render: function() {
    return (
      <nav className={'navigation ' + this.openClass()}>
        <div className='navigation__links'>
          <ul>
            {this.buildList()}
          </ul>
          <div className='navigation__close' onClick={this.slideMenu}>close</div>
        </div>
        <a className='navigation__trigger button' onClick={this.slideMenu}>Menu</a>
      </nav>
    )
  }
});
