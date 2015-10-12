var Footer = React.createClass({
  render: function() {
    return (
      <div className='background background--black'>
        <footer className='footer'>
          <ul className='footer__social'>
            <li className='footer__social-link'><a href='#'>Facebook</a></li>
            <li className='footer__social-link'><a href='#'>Twitter</a></li>
            <li className='footer__social-link'><a href='#'>Youtube</a></li>
          </ul>
          <span className='footer__copywrite'>&copy; 2015 Shadowcat Films</span>
        </footer>
      </div>
    )
  }
});
