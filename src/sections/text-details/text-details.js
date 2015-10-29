var TextDetails = React.createClass({
  render: function() {
    return (
      <div className='text-details text-details--text-is-left content-is-centred'>
        <div className='text-details__text'>
          <Text />
        </div>
        <aside className='text-details__aside'>
          <AsidePanel
            layout-class='text-details__aside-panel'
            heading="This is a new aside"
            aside-type='info'
            type=''
            text='Meggings cray Carles Odd Future, aesthetic next level lumbersexual street art stumptown' />
          <AsidePanel
            layout-class='text-details__aside-panel'
            heading="My new aside is also here"
            aside-type='image'
            image-src="assets/img/business.jpg"
            type=''
            text="Plaid High Life you probably haven't heard of them polaroid, try-hard cornhole Pinterest." />
          <AsidePanel
            layout-class='text-details__aside-panel'
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
