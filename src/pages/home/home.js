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

  getButtonDetails: function() {
    return {
      1: {
        name: 'Documentaries',
        slug: 'documentaries'
      },
      2: {
        name: 'Video Production',
        slug: 'video-production'
      }
    };
  },

  render: function() {
    return (
      <main className='home'>
        <BlogPostSmall heading='Portland letterpress' date='24th Sept. 2015' text='Leggings try-hard mustache Helvetica, viral sriracha tofu wayfarers synth lumbersexual PBR&B fingerstache asymmetrical Bushwick. Scenester street art VHS, McSweeneys banjo pork belly deep v typewriter Carles four dollar toast tofu letterpress occupy stumptown'/>
        <AsidePanel heading='City Project' image-src='assets/img/city.jpg' slug='documentary/1' link-text='View project' type='documentary' text='Deep v you probably havent heard of them dreamcatcher, kitsch artisan listicle' />
        <AsidePanel heading='Natural World' image-src='assets/img/nature.jpg' slug='video-production/2' link-text='View project' type='video-production' text='Shoreditch readymade synth. Cold-pressed small batch vinyl, kitsch tilde hashtag squid try-hard.' />
        <ButtonPair link-details={this.getButtonDetails()}/>
        <SectionHeadingWithStrapline heading='Blog Latest' strapline='These are the latest posts from our blog' />
        <NavigationLink slug={'test'} name={'Test'} selected={true}/>
        <NavigationLink slug={'me'} name={'Navigation'} selected={false}/>
        <NavigationLink slug={'basket'} name={'basket'} selected={false}/>
        <a className='button-pair__button button-pair__button-1 button' href={'/this.html'}>Button</a>
        <a className='button-pair__button button-pair__button-2 button' href={'/sriracha'}>sriracha</a>
        <a className='button-pair__button button-pair__button-2 button' href={'/wayfarers'}>wayfarers</a>
        <a className='button-pair__button button-pair__button-2 button' href={'/fingerstache'}>fingerstache</a>
        <a className='button-pair__button button-pair__button-2 button' href={'/asymmetrical'}>asymmetrical</a>
        <a className='button-pair__button button-pair__button-2 button' href={'/Scenester'}>Scenester</a>
      </main>
    )
  }
});
