import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Firlds, ErrorMessage, Field } from 'formik';


const StyledWrapper = styled.div`
padding: 100px 80px;
border-left: 10px solid ${({activeColor, theme})=> theme[activeColor]};
z-index: 9999;
position: fixed;
display: flex;
flex-direction: column;
right: 0;
top: 0;
height: 100vh;
width: 50%;
background-color: white;
box-shadow: -5px 0 -10px hsla(0, 0%, 0%, 0.2);
transform: translate(${ ({isVisible}) => (isVisible ? '0%' : '100%')});
transition: transform .5s ease-in-out; 
`

const StyledInput = styled(Input)`
margin-top: 30px;
width: 90%;

`
const StyledForm = styled(Form)`
 display:flex;
 flex-direction:column;

`

const StyledTextarea = styled(Input)`
margin: 30px 0 80px;  
border-radius: 20px;
height: 30vh;
width: 90%;
resize: none;
`

function validateUsername(value) {
  let error;
  if (value.length <= 3) {
    error = 'title is too short!';
  }
  return error;
}

const NewItemBar = ({ isVisible, pageContext, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', twitterName: '', content: '', articleUrl: '', created: '' }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm>
          <StyledInput
            as={Field}
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <ErrorMessage name="title" component="div" />
          {pageContext === 'twitters' && (
            <StyledInput
              as={Field}
              type="text"
              name="twitterName"
              placeholder="twitter name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput
              as={Field}
              type="text"
              name="articleUrl"
              placeholder="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextarea
            as="textarea"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activeColor={pageContext} disabled={isSubmitting}>
            Add note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.proTypes = {
    pageContext: PropTypes.oneOf(['twitters','articles','notes'])
}
NewItemBar.defaultProps = {
    pageContext: 'notes'
}
const mapDispatchToProps = dispatch => ({
 addItem: (itemType, itemContent) => dispatch(addItemAction(itemType,itemContent))
})

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));