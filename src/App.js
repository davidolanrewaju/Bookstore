// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import DisplayBooks from './components/DisplayBooks';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<HomePage />} exact path="/" />
          <Route element={<DisplayBooks />} exact path="/books" />
          <Route element={<Categories />} exact path="/categories" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
