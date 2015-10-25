var ServicesIntroduction = React.createClass({
  getButtonDetails: function() {
    return {
      1: {
        name: 'Documentaries',
        slug: 'documentaries'
      },
      2: {
        name: 'Video Production',
        slug: 'video-production'
      }
    };
  },
  render: function() {
    return (
      <article className='services-introduction content-is-centred'>
        <h1 className='services-introduction__heading'>Find out all about our services</h1>
        <ButtonPair link-details={this.getButtonDetails()}/>
        <div className='services-introduction__text text' dangerouslySetInnerHTML={{__html: this.props['services-text']}} >
        </div>
      </article>
    )
  }
});
