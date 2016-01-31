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
          background='assets/backgrounds/photography__header.jpg'
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node.details.node_html}
          aside-colours={['purple-light','purple','grey']}
          aside-images={['assets/img/photography__aside-1.jpg','assets/img/photography__aside-2.jpg']}
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
          aside-images={['assets/img/photography__aside-3.jpg','assets/img/photography__aside-4.jpg']}
          position='2' />
        <Contact />
        <Footer />
      </div>
    )
  }
});
