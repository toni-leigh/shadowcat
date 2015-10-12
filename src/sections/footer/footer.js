var Footer = React.createClass({
  render: function() {
    return (
      <div className='background background--black'>
        <footer className='footer content-is-centred'>
          <ul className='footer__social'>
            <li className='footer__social-link facebook'><a href='#'>Facebook</a></li>
            <li className='footer__social-link twitter'><a href='#'>Twitter</a></li>
            <li className='footer__social-link youtube'><a href='#'>Youtube</a></li>
          </ul>
          <span className='footer__copywrite'>&copy; 2015 Shadowcat Films</span>
        </footer>
      </div>
    )
  }
});
