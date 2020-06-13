import React, { Fragment } from 'react';
import SocialProfile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
// import './App.css';
import user from './jsonComponents/user.json';
import statisticalData from './jsonComponents/statistical-data.json';
import friends from './jsonComponents/friends.json';
import transactions from './jsonComponents/transactions.json';


import Section from './Section';



function App() {
  return (
    // console.log(user.name);
    <Fragment>

      <Section title="SocialProfile">
        {/* <h2>SocialProfile</h2> */}
        <SocialProfile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      
      <Section>
      <h2>Statistics</h2>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      <Section>
      <h2>FriendList</h2>
        <FriendList friends={friends} />
      </Section>

      <Section>
      <h2>TransactionHistory</h2>
        <TransactionHistory items={transactions} />,
      </Section>


    </Fragment> 
  );
}

export default App;
