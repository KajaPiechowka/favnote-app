import styled, {css} from 'styled-components'


const Button = styled.button`
  padding: 0;
  background-color:  #ffd82b;
  width: ${({width})=> width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px
    ${({ secondary }) =>
      secondary && css`
        border:none;
        background-color: #e6e6e6;
        width: 105px;
        height: 30px;
        font-size: 10px;
      `};
`;

export default Button