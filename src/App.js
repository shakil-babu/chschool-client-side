import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Manage from './Pages/Manage/Manage';
import Notices from './Pages/Notices/Notices';
import SearchStudent from './Pages/SearchStudent/SearchStudent';
import Teachers from './Pages/Teachers/Teachers';
import TeachersDetails from './Pages/Teachers/TeachersDetails';
import Workers from './Pages/Workers/Workers';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/manage' component={Manage}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/teachers' component={Teachers}/>
          <Route path='/teachers/:id' component={TeachersDetails}/>
          <Route path='/notices' component={Notices}/>
          <Route path='/search-student' component={SearchStudent}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/workers' component={Workers}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
