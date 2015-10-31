var Service = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='service background background--grey-very-light'>
        <Header page-slug='documentaries' nav-items={this.state.navItems} />
        <Heading
          background='assets/backgrounds/sea2.jpg'
          title='Documentaries'
          strapline='This is the page that talks all about the documentaries' />
        <TextDetails align-text='left'/>
        <VideoPanel src='http://player.vimeo.com/video/67992157' />
        <Testimonials />
        <CallToAction heading='Looking for our documentary products?' button-text='View Products' button-slug='products' />
        <ImageFixed src=''/>
        <TextDetails align-text='right'/>
        <ImageFixed src=''/>
        <Contact />
        <Footer />
      </div>
    )
  }
});
