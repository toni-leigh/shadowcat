var CallToAction = React.createClass({
  render: function() {
    return (
      <div className='background background--orange-dark'>
        <article className='content-is-centred call-to-action'>
          <h1 className='call-to-action__heading'>{this.props.heading}</h1>
          <a className='call-to-action__button' href={this.props['button-slug'] + '.html'}>{this.props['button-text']}</a>
        </article>
      </div>
    )
  }
});
