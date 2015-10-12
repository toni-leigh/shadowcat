var Home = React.createClass({
  render: function() {
    return (
      <main className='home'>
        <div className='home__top-wrapper'>
          <Header page-slug='home'/>
          <VideoSpotlight src='//player.vimeo.com/video/95396328' />
          <ServicesIntroduction />
          <OurChoiceProjects />
          <CallToAction heading='Looking for our spotlight product?' button-text='Get a DVD Copy' button-slug='products'/>
          <BlogSmall />
          <Contact />
          <Footer />
        </div>
      </main>
    )
  }
});
