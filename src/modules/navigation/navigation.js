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

  render: function() {
    return (
      <nav className={'navigation ' + this.openClass()}>
        <ul className='navigation__links'>
          {this.buildList()}
        </ul>
        <a className='navigation__trigger button'>Menu</a>
      </nav>
    )
  }
});
