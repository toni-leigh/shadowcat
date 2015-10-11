var BlogPostSmall = React.createClass({
  render: function() {
    return (
      <article className='blog-small__post'>
        <h1 className='blog-small__post-date'>{this.props.heading}</h1>
        <span className='blog-small__post-date'>{this.props.date}</span>
        <div className='blog-small__post-text'>
          {this.props.text}
        </div>
      </article>
    )
  }
});
