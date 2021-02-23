import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import linkIcon from 'assets/icons/link.svg';

const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  position: relative;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
  :first-of-type {
    z-index: 999;
  }
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${linkIcon}) no-repeat;
  background-size: 60%;
  background-position: center;
  position: absolute;
  top: 25px;
  right: 25px;
`;

const Card = ({ cardType }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>My Best note Ever</StyledHeading>
      <DateInfo>3 Days</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar
          src="https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
          alt="avatar"
        />
      )}
      {cardType === 'article' && <StyledLinkButton href="http://acrogame.net/" />}
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

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
