import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const getRandomGameItem = (gamesItems) => {
  const index = Math.floor(Math.random() * gamesItems.length); //create index random between 0 to gamesItems.length - 1
  return gamesItems[index]; //return item
};

export const calculatorUserWinner = (user1GameItem, user2GameItem) => {
  if (user1GameItem.id === user2GameItem.id) {
    return 'Peace'; //return both player same.
  } else if (user1GameItem.winItemIds.includes(user2GameItem.id)) {
    return 'Win'; //if player 1 winItemIds list contain game player 2 id => player 1 win player 2.
  } else {
    return 'Lost'; //if winItemIds list not contain game player 2 id => player 1 lost, player 2 .
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
