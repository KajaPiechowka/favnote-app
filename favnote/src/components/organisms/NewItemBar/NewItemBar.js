import React from 'react';
import styled , {css}from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';


const StyledWrapper = styled.div`
padding: 100px 80px;
background-color: white;
display: flex;
flex-direction: column;
position:fixed;
${({isVisible})=>
    isVisible && 
    css`
    right:0;
    top:0;
    ` 
 }
width: 50%;
height:100vh;
z-index:9999;
border-left: 5px solid ${({activeColor, theme})=> theme[activeColor]};
box-shadow: -5px 0 -10px hsla(0, 0%, 0%, 0.2);
`

const StyledInput = styled(Input)`
margin-top: 30px;
width: 90%;

`

const StyledTextarea = styled(Input)`
margin: 30px 0 80px;  
border-radius: 20px;
height: 30vh;
width: 90%;
resize: none;
`


const NewItemBar = ({ isVisible,pageContext}) => (
    <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
        <Heading big>Create new {pageContext}</Heading>
        <StyledInput placeholder={pageContext === 'twitters'? 'account name' : 'title'}/>
        {pageContext === 'articles' &&  <StyledInput placeholder="link" />}
        <StyledTextarea as="textarea" placeholder="title"/>
        <Button activeColor={pageContext}>Add note</Button>
    </StyledWrapper>
)

NewItemBar.proTypes = {
    pageContext: PropTypes.oneOf(['twitters','articles','notes'])
}
NewItemBar.defaultProps = {
    pageContext: 'notes'
}


export default withContext(NewItemBar);