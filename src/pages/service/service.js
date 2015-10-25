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
        <Contact />
        <Footer />
      </div>
    )
  }
});
