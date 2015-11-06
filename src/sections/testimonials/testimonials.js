var Testimonials = React.createClass({
  buildPanels: function() {
    var projects = this.props['projects'];
    var rows = [];
    var x = 0;
    projects.forEach(function(project) {
      rows.push(
        <Testimonial
          key={'testimonial' + x} />
      );
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <div className='background background--grey-very-light'>
        <div className='testimonials content-is-centred'>
          <SectionHeadingWithStrapline heading='Projects &amp; Testimonials' strapline='See our three choice projects' />
          {this.buildPanels()}
        </div>
      </div>
    )
  }
});
