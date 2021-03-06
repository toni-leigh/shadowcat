var Photography = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='photography background'>
        <Header page-slug='photography' nav-items={this.state.navItems} />
        <Heading
          background={Utilities.formatImageSrc(this.state.node.images.header, 3)}
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node.details.node_html}
          aside-colours={['purple-light','purple','grey']}
          aside-images={[Utilities.thumbnailImageSrc(this.state.node.images.fixed[2]),Utilities.thumbnailImageSrc(this.state.node.images.fixed[1])]}
          aside-text={this.state.node.details.aside}
          position='1' />
        <ThumbnailGallery
          colour='green'
          gallery-heading='Photography Gallery'
          gallery-strapline='Chambray 8-bit blog, green juice single-origin coffee scenester dreamcatcher ugh butcher. Cray VHS distillery'
          images={this.state.node.images} />
        <ServiceTestimonials projects={this.state.photography} project-type='photography'/>
        <CallToAction heading='Looking for our photography products?' button-text='View Products' button-slug='products' />
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node.details.secondary_html}
          aside-colours={['grey','purple-light','purple']}
          aside-images={[Utilities.thumbnailImageSrc(this.state.node.images.header),Utilities.thumbnailImageSrc(this.state.node.images.fixed[0])]}
          aside-text={this.state.node.details.secondary_aside}
          position='2' />
        <Contact />
        <Footer />
      </div>
    )
  }
});
