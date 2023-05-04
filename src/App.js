
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import SideBar from './SideBar';
import {  Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      
        <Routes>
          <Route path='/' element={

            <div className='flex'>
              <SideBar />
              <RecommendedVideos />
            </div>

          } />
          <Route path='/search/:searchTerm' element={
            <div className='flex'>
              <SideBar />
              <SearchPage />
            </div>
          } />
        </Routes>
      
      {/* <Header/>
      <div className='flex'>
        <SideBar/>
        <RecommendedVideos/>
      </div> */}

    </div>
  );
}

export default App;
