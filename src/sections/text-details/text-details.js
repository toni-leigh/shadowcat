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
        </aside>
      </div>
    )
  }
});
