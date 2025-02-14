import Nav from './component/navbar';
import Dashboard from './component/dashboard';
import SignIn from './component/signIn';
import SignUp from './component/signUp';
import Profile from './component/profile';
import Footer from './component/footer';
import { useState } from 'react';



function App() {

  const [name, setName] = useState("Dashboard")

  function handleName(i){
    setName(i);
  }
  
    return (
    <div className='bg-red-900 relative'>
        <Nav handleName={handleName} name={name}/>
        
        {name === "Dashboard" && <Dashboard/>}

        {name === "Profile" && <Profile handleName={handleName}/>}
        {name === "SignIn" && <SignIn handleName={handleName}/>}
        {name === "SignUp" && <SignUp handleName={handleName}/>}
        <Footer/>
    </div>
  );
}

export default App;