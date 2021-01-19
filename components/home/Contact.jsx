import { HomeIcon, EmailIcon } from 'components/icons';

const Contact = () => {
  return (
    <section className='blog section bd-container' id='Contact'>
      <span className='section-subtitle'>Get in touch</span>
      <h2 className='section-title'>Contact Me</h2>
      <div className='contact__container bd-grid'>
        <div className='contact__content bd-grid'>
          <div className='contact__box'>
            <HomeIcon className='contact__icon' />
            <h3 className='contact__title'>Location</h3>
            <div className='contact__description'>Hertzeliya, Israel</div>
          </div>

          <div className='contact__box'>
            <EmailIcon className='contact__icon' />
            <h3 className='contact__title'>Email</h3>
            <div className='contact__description'>matan3sh@gmail.com</div>
          </div>
        </div>

        <form className='contact__form'>
          <div className='contact__inputs'>
            <input
              type='text'
              placeholder='Full Name'
              className='contact__input'
            ></input>
            <input
              type='email'
              placeholder='Email'
              className='contact__input'
            ></input>
            <input
              type='text'
              placeholder='Subject'
              className='contact__input'
            ></input>
          </div>
          <textarea
            name=''
            id=''
            cols='0'
            rows='7'
            placeholder='Message'
            className='contact__input'
          ></textarea>
          <input
            type='submit'
            value='Send Message'
            className='button contact__button'
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
