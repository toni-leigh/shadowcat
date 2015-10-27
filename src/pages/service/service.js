var Service = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='service'>
        <Header page-slug='documentaries' nav-items={this.state.navItems} />
        <Heading
          background='assets/backgrounds/sea2.jpg'
          title='Documentaries'
          strapline='This is the page that talks all about the documentaries' />
        <div className='content-is-centred background background--grey-very-light'>
          <Text />
          <AsidePanel
            heading="This is a new aside"
            image-src="assets/img/business.jpg"
            slug='null'
            link-text='null'
            type=''
            text='Meggings cray Carles Odd Future, aesthetic next level lumbersexual street art stumptown' />
          <AsidePanel
            heading="My new aside is also here"
            image-src='null'
            slug='null'
            link-text='null'
            type=''
            text="Plaid High Life you probably haven't heard of them polaroid, try-hard cornhole Pinterest." />
          <AsidePanel
            heading="And another aside panel"
            image-src="assets/img/people1.jpg"
            slug='null'
            link-text='null'
            type=''
            text="Cornhole quinoa Wes Anderson, typewriter chillwave forage yr heirloom squid fashion axe you probably haven't heard of them viral brunch." />
        </div>
        <Contact />
        <Footer />
      </div>
    )
  }
});
