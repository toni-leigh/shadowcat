var ServicesIntroduction = React.createClass({
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
      <article className='services-introduction content-is-centred'>
        <h1 className='services-introduction__heading'>Find out all about our services</h1>
        <ButtonPair link-details={this.getButtonDetails()}/>
        <div className='services-introduction__text'>
          <p>
            Flexitarian single-origin coffee health goth Williamsburg, before they sold out fanny pack trust f
            und banh mi. Flexitarian keytar biodiesel flannel Marfa tote bag. Quinoa aesthetic plaid put a bird
            on it, Pinterest hoodie deep v brunch twee authentic normcore Portland letterpress.
          </p>
          <p>
            Williamsburg, before they sold out fanny pack trust fund banh mi.Flexitarian single-origin coffee
            health goth  Flexitarian keytar biodiesel flannel Marfa tote bag. Quinoa aesthetic plaid put a
            bird on it, Pinterest hoodie deep v brunch twee authentic normcore Portland letterpress.
          </p>
          <p>
            Quinoa aesthetic plaid put a bird on it, Pinterest hoodie deep v brunch twee authentic normcore
            Portland letterpress. Flexitarian single-origin coffee health goth Williamsburg, before they sold
            out fanny pack trust fund banh mi. Flexitarian keytar biodiesel flannel Marfa tote bag. Flexitarian
            single-origin coffee health goth Williamsburg, before they sold out.
          </p>
        </div>
      </article>
    )
  }
});
