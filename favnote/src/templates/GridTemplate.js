import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate'
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 25px 50px 25px 70px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
`;

const PageHeader = styled.div`
  margin: 25px 0 50px 0;
`;
const StyledHeading = styled(Heading)`
  margin-top: 25px;
  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <PageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageType}s
        </StyledHeading>
        <StyledParagraph>6 {pageType}s</StyledParagraph>
      </PageHeader>
      <GridWrapper>{children}</GridWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.string,
};
GridTemplate.defaultProps = {
  pageType: 'note',
};

export default GridTemplate;
