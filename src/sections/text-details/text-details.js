var TextDetails = React.createClass({

  componentDidMount: function() {
    window.AnimationTriggers.add('text-details-' + this.props['position'], 200);
  },

  render: function() {
    return (
      <div className={'animtrig-text-details-' + this.props['position'] + ' text-details text-details--text-is-' + this.props['align-text'] + ' content-is-centred'}>
        <div className='text-details__text'>
          <Text heading={this.props['heading']} text={this.props['text']} />
        </div>
        <aside className='text-details__aside'>
          <AsidePanel
            layout-class='text-details__aside-panel'
            heading="This is a new aside"
            aside-type='info'
            type=''
            text='Meggings cray Carles Odd Future, aesthetic next level lumbersexual street art stumptown'
            colour={this.props['aside-colours'][0]} />
          <AsidePanel
            layout-class='text-details__aside-panel'
            heading="My new aside is also here"
            aside-type='image'
            image-src="assets/img/business.jpg"
            type=''
            text="Plaid High Life you probably haven't heard of them polaroid, try-hard cornhole Pinterest."
            colour={this.props['aside-colours'][1]} />
          <AsidePanel
            layout-class='text-details__aside-panel'
            heading="And another aside panel"
            aside-type='image'
            image-src="assets/img/people1.jpg"
            type=''
            text="Cornhole quinoa Wes Anderson, typewriter chillwave forage yr heirloom squid fashion axe you probably haven't heard of them viral brunch."
            colour={this.props['aside-colours'][2]} />
        </aside>
      </div>
    )
  }
});
