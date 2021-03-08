import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';


const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const StyledLinkButton = styled(Link)`
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration: none;
  color: ${({theme})=>theme.black}
`

const DetailsTemplate = ({ title, created, content, articleUrl, twitterName , pageContext }) => (
  <UserPageTemplate >
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageContext === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      {pageContext === 'twitters' && (
        <StyledImage
          alt={twitterName}
          src="https://m.media-amazon.com/images/M/MV5BMTc4MDE4ODM3N15BMl5BanBnXkFtZTcwNjIwNjE3MQ@@._V1_UY317_CR16,0,214,317_AL_.jpg"
        />
      )}
      <Button as={StyledLinkButton} to={`/${pageContext}`} activeColor={pageContext}>
        save / close
      </Button>

    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};



DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
    pageContext: 'notes',
};

export default withContext(DetailsTemplate);