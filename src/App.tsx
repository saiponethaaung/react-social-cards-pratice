import React from 'react';
import './App.scss';
import TwitterList from './components/TwitterList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="project-title">React Social Cards components</h1>
      <div className="card-list">
        <TwitterList />
      </div>
    </div>
  );
}

export default App;
