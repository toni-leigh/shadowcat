var Documentaries = React.createClass({
  getInitialState: function() {
    console.log(window.data);
    return window.data;
  },

  render: function() {
    return (
      <div className='documentaries background'>
        <Header page-slug='documentaries' nav-items={this.state.navItems} />
        <Heading
          background='assets/backgrounds/documentaries__header.jpg'
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node.details.node_html}
          aside-colours={['blue-light','blue','grey']}
          aside-images={['assets/img/documentaries__aside-1.jpg','assets/img/documentaries__aside-2.jpg']}
          aside-text={this.state.node.details.aside}
          position='1' />
        <VideoPanel
          src={'http://player.vimeo.com/video/67992157'}
          heading={this.state.node.details.video_heading}
          strapline={this.state.node.details.video_strapline} />
        <ServiceTestimonials projects={this.state.documentaries} project-type='documentary'/>
        <CallToAction heading='Looking for our documentary products?' button-text='View Products' button-slug='products' />
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node.details.secondary_html}
          aside-colours={['grey','blue-light','blue']}
          aside-images={['assets/img/documentaries__aside-3.jpg','assets/img/documentaries__aside-4.jpg']}
          aside-text={this.state.node.details.secondary_aside}
          position='2' />
        <Contact />
        <Footer />
      </div>
    )
  }
});
