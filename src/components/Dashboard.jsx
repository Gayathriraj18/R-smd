/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Posts from './Posts.jsx';
import Comments from './Comments.jsx';
import Notifications from './Notifications.jsx';

const Dashboard = () => {
  return (
    <div>
      <h1>Social Media Dashboard</h1>
      

      <Comments />
      <Notifications />
    </div>
  );
};

export default Dashboard;