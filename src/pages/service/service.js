var Service = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='service background'>
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
        <ImageFixed
          heading='This is the fixed image heading'
          strapline='Seitan try-hard retro, before they sold out letterpress vegan stumptown.'
          src='/assets/backgrounds/On-location-in-Norway.jpg' />
        <ServiceTestimonials projects={this.state.documentaries} project-type='documentary'/>
        <CallToAction heading='Looking for our documentary products?' button-text='View Products' button-slug='products' />
        <ImageFixed
          heading='Craft beer dreamcatcher humblebrag'
          strapline='Roof party pop-up ugh, tumblr biodiesel organic keffiyeh scenester occupy vegan quinoa.'
          src='/assets/backgrounds/sea1.jpg' />
        <TextDetails
          align-text='right'
          heading='Secondary Details Text'
          text={this.state.node_details.secondary_html}
          aside-colours={['grey','blue-light','blue']}
          position='2' />
        <ImageFixed
          heading='Bicycle rights hammock flexitarian'
          strapline='Chartreuse raw denim aesthetic, knausgaard ugh green juice chillwave kale chips disrupt lo-fi salvia vice.'
          src='/assets/backgrounds/sea3.jpg' />
        <Contact />
        <Footer />
      </div>
    )
  }
});
