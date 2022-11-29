import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;

  input {
    margin-bottom: 15px;
    height: 30px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    transition: all 1s;

    &:focus {
      border: 2px solid ${colors.primaryColor};
    }
  }

  button:hover {
    background: ${colors.primaryDarkColor};
  }
`;
