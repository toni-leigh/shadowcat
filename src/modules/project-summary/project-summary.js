var ProjectSummary = React.createClass({
  getTestimonials: function() {
    var testimonials = this.props['project-summary'].testimonials;
    var rows = [];
    var x = 0;
    testimonials.forEach(function(testimonial) {
      rows.push(
        <div key={'project-summary' + x}
          testimonial={testimonial} />
      );
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <article className='project-summary'>
        <h1 className='project-summary__heading'>{this.props['project-summary'].name}</h1>
        <div className='project-summary__testimonials'>
          {this.getTestimonials()}
        </div>
        <img className='project-summary__image' src={'http://shadowcatfilms.com/' + this.props['project-summary'].image} />
      </article>
    )
  }
});
