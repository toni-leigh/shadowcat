var ProjectSummary = React.createClass({
  getTestimonials: function() {
    var testimonials = this.props['project-summary'].testimonials;
    var rows = [];
    var x = 0;
    testimonials.forEach(function(testimonial) {
      rows.push(
        <Testimonial
          key={'project-summary' + x}
          testimonial={testimonial} />
      );
      x ++;
    });
    return rows;
  },

  componentDidMount: function() {
    window.AnimationTriggers.add('project-image-' + this.props['position'], 450);
    window.AnimationTriggers.add('project-button-' + this.props['position'], 450);
  },

  render: function() {
    return (
      <article className={'project-summary project-summary--' + this.props['project-type']}>
        <div className='project-summary__text'>
          <h1 className='project-summary__heading'>{this.props['project-summary'].name}</h1>
          <div className='project-summary__details' dangerouslySetInnerHTML={{__html: this.props['project-summary'].node_html}}></div>
          <div className='project-summary__testimonials'>
            {this.getTestimonials()}
          </div>
        </div>
        <aside className='project-summary__aside'>
          <img className={'animtrig-project-image-' + this.props['position'] + ' project-summary__image'} src={'http://shadowcatfilms.com/' + this.props['project-summary'].image} />
          <a href='#' className={'animtrig-project-button-' + this.props['position'] + ' button project-summary__button'}>View project details</a>
        </aside>
      </article>
    )
  }
});
