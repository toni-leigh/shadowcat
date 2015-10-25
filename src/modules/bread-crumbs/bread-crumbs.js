var BreadCrumbs = React.createClass({
  buildCrumbs: function() {
    var crumbs = this.props['bread-crumbs'];
    var rows = [];
    var x = 0;
    crumbs.forEach(function(crumb) {
      if (crumb.slug !== null) {
        rows.push(<li className='bread-crumbs__crumb'><a href={'/' + crumb.slug}>{crumb.name}</a></li>);
      } else {
        rows.push(<li className='bread-crumbs__crumb bread-crumbs__crumb--last'><span>{crumb.name}</span></li>);
      }
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <div className='bread-crumbs'>
        <ul>
          {this.buildCrumbs()}
        </ul>
      </div>
    )
  }
});
