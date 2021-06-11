import React from 'react';
import ReactDOM from 'react-dom';
import Orange from '@assets/orange.jpg';
import '@styles/reset.less';

const App = () => {
  return (
    <div className="app">
      <img src={Orange} alt="orange" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
