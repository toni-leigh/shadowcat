var TextDetails = React.createClass({
  render: function() {
    return (
      <div className='text-details text-details--text-is-left content-is-centred'>
        <div className='text-details__text'>
          <Text />
        </div>
        <aside className='text-details__aside'>
          <AsidePanel
            heading="This is a new aside"
            aside-type='image'
            image-src="assets/img/business.jpg"
            type=''
            text='Meggings cray Carles Odd Future, aesthetic next level lumbersexual street art stumptown' />
          <AsidePanel
            heading="My new aside is also here"
            aside-type='info'
            type=''
            text="Plaid High Life you probably haven't heard of them polaroid, try-hard cornhole Pinterest." />
          <AsidePanel
            heading="And another aside panel"
            aside-type='image'
            image-src="assets/img/people1.jpg"
            type=''
            text="Cornhole quinoa Wes Anderson, typewriter chillwave forage yr heirloom squid fashion axe you probably haven't heard of them viral brunch." />
        </aside>
      </div>
    )
  }
});
