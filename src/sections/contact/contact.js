var Contact = React.createClass({
  captchaPassed: function() {
    return document.getElementById('greeting').value === '';
  },

  checkMessageContents: function() {
    return document.getElementById('message').value !== '';
  },

  checkMessageValidity: function(e) {
    var tabPressed = e.keyCode === 9
    if (this.checkMessageContents() === false && !tabPressed) {
      this.setState({ messageValid: false });
    } else {
      this.setState({ messageValid: true });
    }
  },

  getInitialState: function() {
    return {
      messageValid: true,
      sentMessage: {
        shownClass: '',
        stateClass: 'contact__send-attempt--success',
        text: 'Message sent successfully'
      }
    }
  },

  getMessageValidationClass: function() {
    return this.state.messageValid ? 'contact__form-textarea--is-valid' : 'contact__form-textarea--is-not-valid';
  },

  submitForm: function(e) {
    e.preventDefault();
    if (this.checkMessageContents() &&
        this.captchaPassed()) {
      var name = document.getElementById('name').value,
          telephone = document.getElementById('telephone').value,
          email = document.getElementById('email').value,
          message = document.getElementById('message').value;

      this.setState({
        sentMessage: {
          shownClass: 'is-shown',
          stateClass: 'contact__send-attempt--success',
          text: 'Message sent successfully'
        }
      });

      document.getElementById('submit-form').blur();

      document.getElementById('name').value='';
      document.getElementById('telephone').value='';
      document.getElementById('email').value='';
      document.getElementById('message').value='';

      // $.ajax({
      //   url: 'http://shadowcatfilms.com/api/contact_submitted',
      //   type: 'POST',
      //   dataType: 'json',
      //   data: {
      //     'name': name,
      //     'telephone': telephone,
      //     'email': email,
      //     'message': message
      //   },
      //   success: function(data) {
      //     debugger;
      //     console.log("success");
      //   }
      // });
    } else {
      this.setState({
        messageValid: false,
        sentMessage: {
          shownClass: 'is-shown',
          stateClass: 'contact__send-attempt--fail',
          text: 'Message not sent, check the form'
        }
      });

      document.getElementById('message').focus();
    }
  },

  render: function() {
    return (
      <div className='background background--blue-dark'>
        <div className='contact content-is-centred'>
          <SectionHeadingWithStrapline heading='Get In Touch' strapline='Please use any of the methods below to get in touch. We’d love to hear from you about anything.' />
          <form id='contact-form' className='contact__form'>
            <label htmlFor='greeting' className='contact__form-label'>Greeting:</label>
            <input id='greeting' name='greeting' className='contact__form-input' type='text' placeholder='Enter the greeting you prefer' />
            <label htmlFor='name' className='contact__form-label'>Name:</label>
            <input id='name' name='name' className='contact__form-input' type='text' placeholder='Enter your name' />
            <label htmlFor='telephone' className='contact__form-label'>Telephone:</label>
            <input id='telephone' name='telephone' className='contact__form-input' type='text' placeholder='Enter your telephone number' />
            <label htmlFor='email' className='contact__form-label'>Email:</label>
            <input id='email' name='email' className='contact__form-input' type='text' placeholder='you@example.com' />
            <label htmlFor='message' className='contact__form-label'>Message:</label>
            <textarea id='message' name='message' className={'contact__form-input contact__form-textarea ' + this.getMessageValidationClass()} type='text' placeholder='Enter your message [required]' onKeyUp={this.checkMessageValidity}>
            </textarea>
            <div className={'contact__send-attempt ' + this.state.sentMessage.shownClass + ' ' + this.state.sentMessage.stateClass }>{ this.state.sentMessage.text }</div>
            <button id='submit-form' className='contact__form-submit button' onClick={this.submitForm}>Send contact</button>
          </form>
          <div className='contact__details'>
            <Map
              address='16 Monkridge Court, South Gosforth, Newcastle, NE3 1YW'
              parent-element='contact' />
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
