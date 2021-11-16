import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }


  &.active , :active {
    background-color: white;
    outline: none;
    border: none;
  }
`;


export default ButtonIcon