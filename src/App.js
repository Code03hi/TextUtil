import './App.css';
import TextUtils from './component/TextUtils.js'
import Navbar from './component/Navbar.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './component/About.js';
// import Page404 from './component/page404.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<TextUtils />}></Route>
            <Route path='/About' element={<About />}></Route>
            {/* <Route path='/*' element={<Page404/>}></Route> */}
            <Route path='/*' element={<Navigate to="/"/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
