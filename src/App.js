
import './App.css';
import Nav from './components/Nav';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import Item from './components/Item';
import Clients from './components/Clients';
import FaceLoginComponent from './components/FaceLoginComponent';
import { useSelector } from 'react-redux';


function App() {
  return (

      <div className="App">
         <Nav/>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='item' element={<Item />} />
          <Route element={<ProtectedRouter/>}>
            <Route path='clients' element={<Clients />} />
          </Route>
          <Route path='signin' element={<FaceLoginComponent/>} />
        </Routes>
       </div>

    
  );
}

function useAuth() {
  const isLogged = useSelector(state => state.isLogged);
  const user = { loggedIn: isLogged };
  return user && user.loggedIn;
}

function ProtectedRouter(){
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='signin'/>;
}


export default App;
