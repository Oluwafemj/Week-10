
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ProfileCard from './components/ProfileCard';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Hooks Assignment</h1>

      <Counter />
      <TodoList />
      <ProfileCard />
      <SearchBox />
    </div>
  );
}

export default App;