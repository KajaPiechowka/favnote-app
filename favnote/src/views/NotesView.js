import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecues/Card/Card';

const NotesView = () => (
  <UserPageTemplate pageType="note">
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
  </UserPageTemplate>
);
export default NotesView;
