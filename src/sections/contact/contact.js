var Contact = React.createClass({
  render: function() {
    return (
      <div className='background background--blue-dark'>
        <div className='contact content-is-centred'>
          <OurChoiceProjects />
          <SectionHeadingWithStrapline heading='Get In Touch' strapline='Please use any of the methods below to get in touch. We’d love to hear from you about anything.' />
          <form className='contact__form'>
            <label for='name' className='contact__form-label'>Name:</label>
            <input id='name' className='contact__form-input' type='text' placeholder='Enter your name' />
            <label for='telephone' className='contact__form-label'>Telephone:</label>
            <input id='telephone' className='contact__form-input' type='text' placeholder='Enter your telephone number' />
            <label for='email' className='contact__form-label'>Email:</label>
            <input id='email' className='contact__form-input' type='text' placeholder='you@example.com' />
            <label for='message' className='contact__form-label'>Message:</label>
            <textarea id='message' className='contact__form-input contact__form-textarea' type='text' placeholder='Your message'>
            </textarea>
            <button className='contact__form-submit button'>Send contact</button>
          </form>
          <div className='contact__details'>
            <Map />
            <div className='contact__detail'>
              <span className='contact__detail-heading'>Managing Director</span>
              <p className='contact__detail-body'>Alysoun Sharpe</p>
            </div>
            <div className='contact__detail'>
              <span className='contact__detail-heading'>Telephone</span>
              <p className='contact__detail-body'><a href='tel:01234567890'>01234 567 890</a></p>
            </div>
            <div className='contact__detail'>
              <span className='contact__detail-heading'>Address</span>
              <p className='contact__detail-body'>
                3 The Street,<br />
                A Little Town Somewhere,<br />
                That County,<br />
                AB12 3CD
              </p>
            </div>
            <div className='contact__detail'>
              <span className='contact__detail-heading'>Email</span>
              <p className='contact__detail-body'><a href='mailto:email@shadowcatfilms.co.uk'>email@shadowcatfilms.co.uk</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
