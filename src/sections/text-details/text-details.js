var TextDetails = React.createClass({

  componentDidMount: function() {
    window.AnimationTriggers.add('text-details-' + this.props['position'], 200);
  },

  render: function() {
    return (
      <section className='background background--grey-very-light'>
        <div className={'animtrig-text-details-' + this.props['position'] + ' text-details text-details--text-is-' + this.props['align-text'] + ' content-is-centred'}>
          <div className='text-details__text'>
            <Text heading={this.props['heading']} text={this.props['text']} />
          </div>
          <aside className='text-details__aside'>
            <AsidePanel
              layout-class='text-details__aside-panel'
              aside-type='info'
              type=''
              text={this.props['aside-text']}
              colour={this.props['aside-colours'][0]} />
            <AsidePanel
              layout-class='text-details__aside-panel'
              aside-type='image'
              image-src={this.props['aside-images'][0]}
              type=''
              text=""
              colour={this.props['aside-colours'][1]} />
            <AsidePanel
              layout-class='text-details__aside-panel'
              aside-type='image'
              image-src={this.props['aside-images'][1]}
              type=''
              text=""
              colour={this.props['aside-colours'][2]} />
          </aside>
        </div>
      </section>
    )
  }
});
