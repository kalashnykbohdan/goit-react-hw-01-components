import React, { Fragment } from 'react';
import SocialProfile from './Profile';
// import './App.css';
import user from './user.json';

function App() {
  return (
    // console.log(user.name);
    <Fragment>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    </Fragment> 
  );
}

export default App;
