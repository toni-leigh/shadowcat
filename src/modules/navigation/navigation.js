var Navigation = React.createClass({
  buildList: function() {
    var navItems = this.getNavItems();
    var rows = [];
    var x = 0;
    this.getNavItems().forEach(function(navItem) {
      rows.push(<NavigationLink key={'nav' + x} slug={navItem.slug} name={navItem.name} selected={navItem.selected}/>);
      x ++;
    });
    return rows;
  },

  getNavItems: function() {
    return [
      {
        name: 'Home',
        slug: 'index',
        selected: true
      },
      {
        name: 'Documentaries',
        slug: 'documentaries',
        selected: false
      },
      {
        name: 'Video Production',
        slug: 'video-production',
        selected: false
      },
      {
        name: 'Contact',
        slug: 'contact',
        selected: false
      },
      {
        name: 'Blog',
        slug: 'blog',
        selected: false
      },
      {
        name: 'Products',
        slug: 'products',
        selected: false
      },
      {
        name: 'Basket',
        slug: 'basket',
        selected: false
      }
    ];
  },

  render: function() {
    return (
      <nav className='navigation'>
        <ul className='navigation__links'>
          {this.buildList()}
        </ul>
        <a className='navigation__trigger button'>Menu</a>
      </nav>
    )
  }
});
