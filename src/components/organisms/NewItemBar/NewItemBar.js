import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ValuesSchema = Yup.object().shape({
  title: Yup.string().min(2, 'title too short!').max(50, 'title too long!').required('Required'),
  content: Yup.string()
    .min(20, 'content too short!')
    .max(20000, 'content too long!')
    .required('Required'),
  twitterUrl: Yup.string().min(2, 'twitter name too short!').max(50, 'twitter name too long!'),
  // .required('Required'),
  articleUrl: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').url('This is not url!'),
  // .required('Required'),
});

const StyledWrapper = styled.div`
  padding: 100px 80px;
  border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
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
  transform: translate(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
  width: 90%;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled(Input)`
  margin: 30px 0 80px;
  border-radius: 20px;
  height: 30vh;
  width: 90%;
  resize: none;
`;
const StyledErrorMessage = styled.div`
  width: 200px;
  background-color: ${({ theme }) => theme.grey100};
  color: red;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  text-align: center;
  border-radius: 50px;
  margin: 4px;
  padding: 2px;
`;

const NewItemBar = ({ isVisible, pageContext, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', twitterUrl: '', content: '', articleUrl: '', created: '' }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
      validationSchema={ValuesSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            as={Field}
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title ? (
            <StyledErrorMessage>{errors.title}</StyledErrorMessage>
          ) : null}

          {pageContext === 'twitters' && (
            <>
              <StyledInput
                as={Field}
                type="text"
                name="twitterUrl"
                placeholder="profile url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterUrl}
              />
              {errors.twitterUrl && touched.twitterUrl ? (
                <StyledErrorMessage>{errors.twitterUrl}</StyledErrorMessage>
              ) : null}
            </>
          )}

          {pageContext === 'articles' && (
            <>
              <StyledInput
                as={Field}
                type="text"
                name="articleUrl"
                placeholder="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
              {errors.articleUrl && touched.articleUrl ? (
                <StyledErrorMessage>{errors.articleUrl}</StyledErrorMessage>
              ) : null}
            </>
          )}

          <StyledTextarea
            as="textarea"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          {errors.content && touched.content ? (
            <StyledErrorMessage>{errors.content}</StyledErrorMessage>
          ) : null}
          <Button type="submit" activeColor={pageContext} disabled={isSubmitting}>
            Add note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.proTypes = {
  pageContext: PropTypes.oneOf(['twitters', 'articles', 'notes']),
};
NewItemBar.defaultProps = {
  pageContext: 'notes',
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
