var Service = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='service background background--grey-very-light'>
        <ImageFixed />
        <Header page-slug='documentaries' nav-items={this.state.navItems} />
        <Heading
          background='assets/backgrounds/sea2.jpg'
          title={this.state.node.name}
          strapline={this.state.node.short_desc} />
        <TextDetails
          align-text='left'
          heading='Main Details Text'
          text={this.state.node_details.node_html}
          aside-colours={['blue-light','blue','grey']}
          position='1' />
        <VideoPanel src='http://player.vimeo.com/video/67992157' />
        <ServiceTestimonials projects={this.state.documentaries} project-type='documentary'/>
        <CallToAction heading='Looking for our documentary products?' button-text='View Products' button-slug='products' />
        <ImageFixed src=''/>
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node_details.secondary_html}
          aside-colours={['grey','blue-light','blue']}
          position='2' />
        <ImageFixed src=''/>
        <Contact />
        <Footer />
      </div>
    )
  }
});
