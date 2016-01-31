var Bordercollies = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='documentaries background'>
        <Header page-slug='photography' nav-items={this.state.navItems} />
        <Heading
          background='assets/backgrounds/photography__header.jpg'
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node.details.node_html}
          aside-colours={['blue-light','blue','grey']}
          aside-images={['assets/img/photography__aside-1.jpg','assets/img/photography__aside-2.jpg']}
          position='1' />
        <VideoPanel
          src={'http://player.vimeo.com/video/67992157'}
          heading={this.state.node.details.video_heading}
          strapline={this.state.node.details.video_strapline} />
        <ImageFixed
          heading='This is the fixed image heading'
          strapline='Seitan try-hard retro, before they sold out letterpress vegan stumptown.'
          src='/assets/backgrounds/photography__fixed-1.jpg' />
        <ThumbnailGallery
          colour='blue'
          gallery-heading='Photography Gallery'
          gallery-strapline='Chambray 8-bit blog, green juice single-origin coffee scenester dreamcatcher ugh butcher. Cray VHS distillery'
          images={this.state.node.images} />
        <CallToAction heading='Looking for our photography products?' button-text='View Products' button-slug='products' />
        <ImageFixed
          heading='Craft beer dreamcatcher humblebrag'
          strapline='Roof party pop-up ugh, tumblr biodiesel organic keffiyeh scenester occupy vegan quinoa.'
          src='/assets/backgrounds/photography__fixed-2.jpg' />
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node.details.secondary_html}
          aside-colours={['grey','blue-light','blue']}
          aside-images={['assets/img/photography__aside-3.jpg','assets/img/photography__aside-4.jpg']}
          position='2' />
        <ImageFixed
          heading='Bicycle rights hammock flexitarian'
          strapline='Chartreuse raw denim aesthetic, knausgaard ugh green juice chillwave kale chips disrupt lo-fi salvia vice.'
          src='/assets/backgrounds/photography__fixed-3.jpg' />
        <Contact />
        <Footer />
      </div>
    )
  }
});
