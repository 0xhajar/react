import logo from './logo.svg';
import './App.css';
import Count from './components/UseStatePractise/Counter.js';
import Counter2 from './components/UseStatePractise/Counter2.js';
import Counter3 from './components/UseStatePractise/Counter3.js';
import HookStateArray from './components/UseStatePractise/HookStateArray.js';
import EffectExample1 from './components/UseEffectPractise/EffectExample1.js';
import EffectExample2 from './components/UseEffectPractise/EffectExample2.js';
import EffectExample3 from './components/UseEffectPractise/EffectExample3.js';
import MouseContainer from './components/UseEffectPractise/MouseContainer.js';
import FetchMultiplePosts from './components/dataFetching/FetchMultiplePosts.js';
import FetchSinglePost from './components/dataFetching/FetchSinglePost.js';

function App() {
  return (
    <div className="App">
      <FetchSinglePost />
    </div>
  );
}

export default App;
