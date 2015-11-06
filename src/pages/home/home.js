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
          <Video src='http://player.vimeo.com/video/95396328' />
          <ServicesIntroduction services-text={ /* this.state.node_details.node_html */ "<p>Hashtag trust fund Odd Future deep v lumbersexual, biodiesel retro forage occupy butcher. Pork belly art party banjo single-origin coffee flannel, actually sriracha mixtape. Shoreditch mixtape skateboard, banjo migas plaid hoodie Schlitz Brooklyn kitsch trust fund slow-carb. Brooklyn cronut biodiesel.</p><h2>Echo Park Pitchfork</h2><p>Hillwave Wes Anderson listicle fap wayfarers Echo Park paleo readymade lumbersexual tofu +1 you probably havent heard of them. Meggings flannel seitan tilde actually, hoodie cardigan master cleanse occupy.</p><p> Pork belly art party banjo single-origin coffee flannel, actually sriracha mixtape. Shoreditch mixtape skateboard, banjo migas plaid hoodie Schlitz Brooklyn kitsch trust fund slow-carb. Brooklyn cronut biodiesel.</p>" } />
          <OurChoiceProjects projects={this.state.home_projects} />
          <CallToAction heading='Looking for our spotlight product?' button-text='Get a DVD Copy' button-slug='products' />
          <BlogSmall blog-posts={this.state.home_blog_posts}/>
          <Contact />
          <Footer />
        </div>
      </main>
    )
  }
});
