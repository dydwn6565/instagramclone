import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyMessage from './components/MyMessage';
import Explore from './components/Explore';
import Profile from './components/Profile';
import AccountEdit from './components/AccountEdit';
import ChangePassword from './components/ChangePassword';
import AppandWebSite from './components/AppandWebSite';
import EmailAlarm from './components/EmailAlarm';
import PushAlarm from './components/PushAlarm';
import ManageContactNumber from './components/ManageContactNumber';
import PrivateInfoAndSecurity from './components/PrivateInfoAndSecurity';
import Supervision from './components/Supervision';
import LoginActivity from './components/LoginActivity';
import EmailFromInstagram from './components/EmailFromInstagram';
import Help from './components/Help';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route index element={<Home />} /> */}
      <Route path="myMessage" element={<MyMessage />}></Route>
      <Route path="explore" element={<Explore />}></Route>
      <Route path="id" element={<Profile />}></Route>
      <Route path="accounts/edit" element={<AccountEdit />}></Route>
      <Route
        path="accounts/password/change"
        element={<ChangePassword />}
      ></Route>
      <Route path="accounts/manage_access" element={<AppandWebSite />}></Route>
      <Route path="emails/settings" element={<EmailAlarm />}></Route>
      <Route path="push/web/settings" element={<PushAlarm />}></Route>
      <Route
        path="accounts/contact_history"
        element={<ManageContactNumber />}
      ></Route>
      <Route
        path="accounts/privacy_and_security"
        element={<PrivateInfoAndSecurity />}
      ></Route>
      <Route path="accounts/supervision" element={<Supervision />}></Route>
      <Route path="session/login_activity" element={<LoginActivity />}></Route>
      <Route path="emails/emails_sent" element={<EmailFromInstagram />}></Route>
      <Route path="settings/help" element={<Help />}></Route>
      {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
