import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.note};
  width: 220px;
  height: 47px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16px
    ${({ secondary }) =>
      secondary &&
      css`
        border: none;
        background-color: ${({ theme }) => theme.grey200};
        width: 105px;
        height: 30px;
        font-size: 10px;
      `};
`;

export default Button;
