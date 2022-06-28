import { useEffect, useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import './assets/style/index.scss';

import HomePage from './Page/HomePage/HomePage';
import AdminsPage from './Page/AdminsPage';
import FinancePage from './Page/FinancePage';
import SettingsPage from './Page/SettingsPage';
import TeachersPage from './Page/TeachersPage';
import StatisticPage from './Page/StatisticPage';
import GroupsPage from './Page/GroupsPage';
import SideBar from './container/SideBar/SideBar';
import Header from './container/Header';
import LoginPage from './Page/LoginPage';
import StudentsPage from './Page/StudentsPage';
import LeadPage from './Page/LeadPage';
import AdminSingelPage from './Page/AdminSingelPage/AdminSingelPage';




const token = 'asdasdasdasdadasdad';
// const token = window.localStorage.getItem('sessionToken')



function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme : light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  // const switchTheme = ()=>{
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  // }

  // const appLoad =()=>{
  //   console.log('ok');
  // }

  const [state, setState] = useState(false)
  
  return (
    <div className={`app ${theme}`}>
      <Router>
            {
              token ? (
                <div className="app-inner">
                  <div className="app-inner-left">
                    <SideBar/>
                  </div>
                  <div className="app-inner-right">
                      <div className="app-inner-right-top">
                        <Header/>
                      </div>
                      <div className="app-inner-right-page">
                        <Routes>
                          <Route index path='/' element={<HomePage/>}/>
                          <Route path='/adminlar' element={<AdminsPage/>}/>
                          <Route path='/adminlar/:id' element={<AdminSingelPage/>}/>
                          <Route path='/moliya' element={<FinancePage/>}/>
                          <Route path='/guruhlar' element={<GroupsPage/>}/>
                          <Route path='/oquvchilar' element={<StudentsPage/>}/>
                          <Route path='/oqituvchilar' element={<TeachersPage/>}/>
                          <Route path='/lead' element={<LeadPage/>}/>
                          <Route path='/statistika' element={<StatisticPage/>}/>
                          <Route path='/sozlamalar' element={<SettingsPage/>}/>
                        </Routes>
                      </div>
                  </div>
                </div>
              ) : (
                <LoginPage/>
              )
            }      
      </Router>
    </div>
  );
}

export default App;