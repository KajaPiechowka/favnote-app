import React from 'react';
import styled ,{css} from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';


const Wrapper = styled.div`
min-height: 380px;
box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
border-radius: 10px;
overflow: hidden;
position:relative;
display:grid;
grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ yellow,theme }) => yellow ? theme.primary : 'white'};
  ${({flex})=>
  flex && 
  css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `}
`;

const DateInfo = styled(Paragraph)`
margin: 0 0 10px;
font-weight: ${({theme})=>theme.bold};
font-size: ${({theme})=>theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
margin: 10px 0 0;
`;


const Card = () => (
  <Wrapper>
    <InnerWrapper yellow>
      <StyledHeading>My Best note Ever</StyledHeading>
      <DateInfo>3 Days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Some examples of SaaS technology-based online applications are Email clients, online office
        tools, calendar systems, and more.
      </Paragraph>
    <Button secondary>Remove</Button>
    </InnerWrapper>
  </Wrapper>
);

export default Card