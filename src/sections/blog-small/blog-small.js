var BlogSmall = React.createClass({
  buildList: function() {
    var blogPosts = this.props['blog-posts'];
    var rows = [];
    var x = 0;
    blogPosts.forEach(function(post) {
      rows.push(
        <BlogPostSmall
          heading={post.name}
          date={post.created}
          text={post.node_html} />
      );
      x ++;
    });
    return rows;
  },
  render: function() {
    return (
      <div className='background background--grey-very-light'>
        <div className='blog-small content-is-centred'>
          <SectionHeadingWithStrapline heading='Blog Latest' strapline='These are the latest posts from our blog' />
          {this.buildList()}
        </div>
      </div>
    )
  }
});
