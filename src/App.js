//dependencies
import { Route, Routes } from 'react-router-dom';
import './App.css'
//pages&components
import NavBar from './Components/NavBar';
import Songs from './Pages/Songs';
import SongEdit from './Pages/SongEdit';
import SongIndex from './Pages/SongIndex';
import NewSong from './Pages/NewSong';

function App() {
  return (
    <div className="App">
      <header>TUNER APP</header>
      <NavBar />
      <main>
        <Routes>
          <Route exact path ="/" element={<Songs />} />
          <Route path ="/:id" element={<SongIndex />} />
          <Route path ="/:id/edit" element={<SongEdit />} />
          <Route path ="/new" element={<NewSong />} />
        </Routes>
        <aside></aside>
        </main>
        <footer></footer>
    </div>
  );
}

export default App;
