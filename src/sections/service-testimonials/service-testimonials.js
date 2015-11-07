var ServiceTestimonials = React.createClass({
  buildPanels: function() {
    var projects = this.props['projects'];
    var rows = [];
    var x = 0;
    projects.forEach(function(project) {
      rows.push(
        <ProjectSummary
          key={'testimonial' + x}
          project-summary={project} />
      );
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <section className='background background--grey-very-light'>
        <div className='service-testimonials content-is-centred'>
          <SectionHeadingWithStrapline heading='Projects &amp; Testimonials' strapline='See our three choice projects' />
          {this.buildPanels()}
        </div>
      </section>
    )
  }
});
