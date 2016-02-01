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
          background={Utilities.formatImageSrc(this.state.node.images.header, 3)}
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node.details.node_html}
          aside-colours={['blue-light','blue','grey']}
          aside-images={[Utilities.thumbnailImageSrc(this.state.node.images.fixed[2]),Utilities.thumbnailImageSrc(this.state.node.images.fixed[1])]}
          aside-text={this.state.node.details.aside}
          position='1' />
        <VideoPanel
          src={'http://player.vimeo.com/video/67992157'}
          heading={this.state.node.details.video_heading}
          strapline={this.state.node.details.video_strapline} />
        <ImageFixed
          heading='This is the fixed image heading'
          strapline='Seitan try-hard retro, before they sold out letterpress vegan stumptown.'
          src={Utilities.formatImageSrc(this.state.node.images.fixed[0], 3)} />
        <ThumbnailGallery
          colour='blue'
          gallery-heading='Photography Gallery'
          gallery-strapline='Chambray 8-bit blog, green juice single-origin coffee scenester dreamcatcher ugh butcher. Cray VHS distillery'
          images={this.state.node.images} />
        <CallToAction heading='Looking for our photography products?' button-text='View Products' button-slug='products' />
        <ImageFixed
          heading='Craft beer dreamcatcher humblebrag'
          strapline='Roof party pop-up ugh, tumblr biodiesel organic keffiyeh scenester occupy vegan quinoa.'
          src={Utilities.formatImageSrc(this.state.node.images.fixed[1], 3)} />
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node.details.secondary_html}
          aside-colours={['grey','blue-light','blue']}
          aside-images={[Utilities.thumbnailImageSrc(this.state.node.images.header),Utilities.thumbnailImageSrc(this.state.node.images.fixed[0])]}
          aside-text={this.state.node.details.secondary_aside}
          position='2' />
        <ImageFixed
          heading='Bicycle rights hammock flexitarian'
          strapline='Chartreuse raw denim aesthetic, knausgaard ugh green juice chillwave kale chips disrupt lo-fi salvia vice.'
          src={Utilities.formatImageSrc(this.state.node.images.fixed[2], 3)} />
        <Contact />
        <Footer />
      </div>
    )
  }
});
