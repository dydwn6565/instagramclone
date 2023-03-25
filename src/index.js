import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyMessage from './components/MyMessage';
import Explore from '../src/components/profileDetail/Explore';
import Profile from './components/profilePage/Profile';
import AccountEdit from '../src/components/profileDetail/AccountEdit';
import ChangePassword from '../src/components/profileDetail/ChangePassword';
import AppandWebSite from '../src/components/profileDetail/AppandWebSite';
import EmailAlarm from '../src/components/profileDetail/EmailAlarm';
import PushAlarm from '../src/components/profileDetail/PushAlarm';
import ManageContactNumber from '../src/components/profileDetail/ManageContactNumber';
import PrivateInfoAndSecurity from '../src/components/profileDetail/PrivateInfoAndSecurity';
import Supervision from '../src/components/profileDetail/Supervision';
import LoginActivity from '../src/components/profileDetail/LoginActivity';
import EmailFromInstagram from '../src/components/profileDetail/EmailFromInstagram';
import Help from '../src/components/profileDetail/Help';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import InstaStory from "../src/components/InstaStory"


import store from './store/index'
import {Provider} from 'react-redux'

import Chat from './components/Chat';
import StoryModal from './components/Modals/StoryModal';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route path="/myMessage" element={<MyMessage />}></Route>
        <Route path="/myMessage/:room" element={<Chat />}></Route>
        <Route path="/story/:userid" element={<StoryModal />}></Route>
        <Route path="/instaStoryTester" element={<InstaStory />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/id" element={<Profile />}></Route>
        <Route path="/id/saved" element={<Profile />}></Route>
        <Route path="/id/taged" element={<Profile />}></Route>
        <Route path="/accounts/edit" element={<AccountEdit />}></Route>
        <Route
          path="/accounts/password/change"
          element={<ChangePassword />}
        ></Route>
        <Route
          path="/accounts/manage_access"
          element={<AppandWebSite />}
        ></Route>
        <Route path="/emails/settings" element={<EmailAlarm />}></Route>
        <Route path="/push/web/settings" element={<PushAlarm />}></Route>
        <Route
          path="/accounts/contact_history"
          element={<ManageContactNumber />}
        ></Route>
        <Route
          path="/accounts/privacy_and_security"
          element={<PrivateInfoAndSecurity />}
        ></Route>
        <Route path="/accounts/supervision" element={<Supervision />}></Route>
        <Route
          path="/session/login_activity"
          element={<LoginActivity />}
        ></Route>
        <Route
          path="/emails/emails_sent"
          element={<EmailFromInstagram />}
        ></Route>
        <Route path="/settings/help" element={<Help />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/accounts/emailsignup" element={<SignUp />}></Route>
      
      </Routes>
    </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
