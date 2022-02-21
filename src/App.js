import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home_page from './pages/Home_page';
import Profile_page from './pages/Profile_page';
import All_groups_page from './pages/All_groups_page';
import All_users_page from './pages/All_users_page';
import Sign_in_register from './pages/Sign_in_register';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home_page/>} />
          <Route path="/profile" element={<Profile_page/>} />
          <Route path="/allGroups" element={<All_groups_page/>} />
          <Route path="/allUsers" element={<All_users_page/>} />
          <Route path="/signIn" element={<Sign_in_register/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
