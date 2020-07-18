import AuthForm from './AuthForm';
import styled from 'styled-components';

export default styled(AuthForm)`
  &.AuthForm { 
    padding-left: 2rem;
    padding-right: 2rem;
    .AuthForm__title { 
      font-weight: bold;
      margin-bottom: 3.5rem;
    }
    .AuthForm__email {
      margin-bottom: 2.5rem;
    }
    .AuthForm__password {
      margin-bottom: 2.5rem;
    }
    .AuthForm__button {
      height: 3.25rem;
      background-color: #2D9CDB;
    }
  }

`;