var Testimonial = React.createClass({
  render: function() {
    return (
      <blockquote className='testimonial'>
        <div className='testimonial__quote' dangerouslySetInnerHTML={{__html: this.props['testimonial'].node_html}}>
        </div>
        <span className='testimonial__credit'>{this.props['testimonial'].credit}</span>
      </blockquote>
    )
  }
});
