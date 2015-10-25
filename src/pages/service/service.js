var Service = React.createClass({
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      <div className='service'>
        <Header page-slug='documentaries' nav-items={this.state.navItems} />
        <Contact />
        <Footer />
      </div>
    )
  }
});
