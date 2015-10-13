var Home = React.createClass({
  getInitialState: function() {
    return {
      navItems: [
        {
          name: 'Home',
          slug: 'index',
          selected: true
        },
        {
          name: 'Documentaries',
          slug: 'documentaries',
          selected: false
        },
        {
          name: 'Video Production',
          slug: 'video-production',
          selected: false
        },
        {
          name: 'Contact',
          slug: 'contact',
          selected: false
        },
        {
          name: 'Blog',
          slug: 'blog',
          selected: false
        },
        {
          name: 'Products',
          slug: 'products',
          selected: false
        },
        {
          name: 'Basket',
          slug: 'basket',
          selected: false
        }
      ]
    };
  },

  render: function() {
    return (
      <main className='home'>
        <div className='home__top-wrapper'>
          <Header page-slug='home' nav-items={this.state.navItems}/>
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
