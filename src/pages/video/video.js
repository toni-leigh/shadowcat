var Video = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='video background'>
        <Header page-slug='video' nav-items={this.state.navItems} />
        <Heading
          background='assets/backgrounds/video-production__header.jpg'
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node.details.node_html}
          aside-colours={['green-light','green','grey']}
          aside-images={['assets/img/video-production__aside-1.jpg','assets/img/video-production__aside-2.jpg']}
          aside-text={this.state.node.details.aside}
          position='1' />
        <VideoPanel
          src={'http://player.vimeo.com/video/67992157'}
          heading={this.state.node.details.video_heading}
          strapline={this.state.node.details.video_strapline} />
        <ServiceTestimonials projects={this.state.videos} project-type='video'/>
        <CallToAction heading='Looking for our video products?' button-text='View Products' button-slug='products' />
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node.details.secondary_html}
          aside-colours={['grey','green-light','green']}
          aside-images={['assets/img/video-production__aside-3.jpg','assets/img/video-production__aside-4.jpg']}
          aside-text={this.state.node.details.secondary_aside}
          position='1' />
        <Contact />
        <Footer />
      </div>
    )
  }
});
