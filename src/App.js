import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { projectAuth } from './firebase/config';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen) 
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
      unsubscribe()
    })
  }, [])
  return (
    <BrowserRouter>
      {!user ? (<Login />) : (
      <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route path='/' element={<EmailList />} />
            <Route path='/mail' element={<Mail />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </BrowserRouter>
  );
}

export default App;
