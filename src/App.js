import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Login from './screens/LoginScreen/Login';
import Profile from './screens/ProfileScreen/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/userSlice';


function App() {

  // const [user, setUser] = useState(false);
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //LOggedout
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className="App">
      
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (    
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
