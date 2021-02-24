import React from 'react';
import {PropTypes} from 'prop-types';
import styled from 'styled-components'
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
padding: 25px 150px 25px 70px;
`

const GridWrapper = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
grid-gap:80px;
`

const PageHeader = styled.div`
margin: 25px 0 50px 0;

`
const StyledHeading = styled(Heading)`
margin-top: 25px;

`
const StyledParagraph = styled(Paragraph)`
margin: 0;
font-weight: ${({theme})=>theme.bold};

`


const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <PageHeader>
        <Input search placeholder="Search"/>
        <StyledHeading big as="h1">Notes</StyledHeading>
        <StyledParagraph>6 Notes</StyledParagraph>
      </PageHeader>
      <GridWrapper>{children}</GridWrapper>
    </StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
    pageType: PropTypes.string,
  children: PropTypes.element.isRequired,
};
UserPageTemplate.defaultProps = {
    pageType: 'note'
}

export default UserPageTemplate;
