import { useForm } from 'react-hook-form';

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='txt_field'>
        <input
          type='text'
          id='avatar'
          name='avatar'
          ref={register}
          placeholder='Avatar'
        />
      </div>
      <div className='txt_field'>
        <input
          type='text'
          id='username'
          name='username'
          ref={register}
          placeholder='Username'
        />
      </div>
      <div className='txt_field'>
        <input
          type='text'
          id='email'
          name='email'
          ref={register}
          placeholder='Email'
        />
      </div>
      <div className='txt_field'>
        <input
          type='password'
          id='password'
          name='password'
          ref={register}
          placeholder='Password'
        />
      </div>
      <div className='txt_field'>
        <input
          type='password'
          id='passwordConfirmation'
          name='passwordConfirmation'
          ref={register}
          placeholder='Confirm Password'
        />
      </div>
      <input type='submit' value='Send' />
    </form>
  );
};

export default RegisterForm;
