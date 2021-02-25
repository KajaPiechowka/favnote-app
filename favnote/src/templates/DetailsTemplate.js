import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';




const DetailsTemplate = () => (
  <UserPageTemplate>
    <div>
      <h1>Note</h1>
      <p>
        Eiusmod in fugiat irure voluptate nulla officia id ullamco aute. Aute sit enim fugiat eu
        laborum tempor consequat sint magna anim enim cupidatat ut exercitation. Elit pariatur enim
        ullamco dolor sint tempor quis. Occaecat commodo laborum cupidatat sit laboris incididunt
        culpa ea commodo Lorem. Fugiat nostrud in ea sunt ea. Consectetur ullamco mollit nostrud
        nisi aute sit in anim. Deserunt reprehenderit labore commodo amet ad id ad mollit et officia
        consequat.
      </p>
      <Link to="/">Go back</Link>
    </div>
  </UserPageTemplate>
);

export default DetailsTemplate;