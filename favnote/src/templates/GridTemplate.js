import React, {Component}  from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext'
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg'
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';


const StyledWrapper = styled.div`
position: relative;
  padding: 25px 50px 25px 50px;
  @media (max-width:1000px) {
    padding:25px 70px 25px 70px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  @media (max-width:1000px) {
    display:flex;
    flex-wrap: wrap;

  }
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

const AddButton = styled(ButtonIcon)`
border-radius: 50%;
background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
background-size: 35%;
position: fixed;
right: 40px;
bottom: 40px;
z-index: 10000;
`



class GridTemplate extends Component {

state = {
  isItemBarOpen: false,
}

handleToggleBar = () => { this.setState(prevState => ({ isItemBarOpen: !prevState.isItemBarOpen}) ) }



  render(){
    const {children, pageContext} = this.props
    const {isItemBarOpen} = this.state
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <PageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </PageHeader>
          <GridWrapper>{children}</GridWrapper>
        </StyledWrapper>
        <AddButton icon={plusIcon} activeColor={pageContext} onClick={this.handleToggleBar}/>
        <NewItemBar isVisible={isItemBarOpen}/>
      </UserPageTemplate>
    )}
  };

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};


export default withContext(GridTemplate);
