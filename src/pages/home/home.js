var Home = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <main className='home'>
        <div className='home__top-wrapper'>
          <Header page-slug='home' nav-items={this.state.navItems} />
          <VideoSpotlight src='http://player.vimeo.com/video/95396328' />
          <ServicesIntroduction services-text={this.state.node_details.node_html} />
          <OurChoiceProjects projects={this.state.home_projects} />
          <CallToAction heading='Looking for our spotlight product?' button-text='Get a DVD Copy' button-slug='products' />
          <BlogSmall />
          <Contact />
          <Footer />
        </div>
      </main>
    )
  }
});
