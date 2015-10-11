var SectionHeadingWithStrapline = React.createClass({
  render: function() {
    return (
      <div class='section-header'>
        <h1 className='section-header__heading'>{this.props.heading}</h1>
        <h2 className='section-header__strapline'>{this.props.strapline}</h2>
      </div>
    )
  }
});
