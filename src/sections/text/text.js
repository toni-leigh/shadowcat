var Text = React.createClass({
  render: function() {
    return (
      <section className='text'>
        <h1>{this.props['heading']}</h1>
        <div  dangerouslySetInnerHTML={{__html: this.props['text']}}></div>
      </section>
    )
  }
});
