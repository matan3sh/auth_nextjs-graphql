import { useForm } from 'react-hook-form';
import { Loader } from 'components/shared';

const LoginForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      {loading ? <Loader /> : <input type='submit' value='Connect' />}
    </form>
  );
};

export default LoginForm;
