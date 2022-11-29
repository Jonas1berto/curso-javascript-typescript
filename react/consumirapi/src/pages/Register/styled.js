import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input {
    height: 30px;
    font-size: 1.2em;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 0 10px;
    margin-top: 5px;

    &:focus {
      border: 2px solid ${colors.primaryColor};
    }
  }
`;
