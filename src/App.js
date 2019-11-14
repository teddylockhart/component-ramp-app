import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div>
      <ContactCard 
        // For numerous props, consider passing an object instead 
        contact={{name:'Wonder Woman', imgUrl:'', phone:'', email:''}}

        // name='Wonder Woman' 
        // imgUrl=''
        // phone=''
        // email=''
        />
      <ContactCard 
        contact={{name:'Batman', imgUrl:'', phone:'', email:''}}

        // name='Batman' 
        // imgUrl=''
        // phone=''
        // email=''
        />
      <ContactCard 
        contact={{name:'Superman', imgUrl:'', phone:'', email:''}}
        // name='Superman' 
        // imgUrl=''
        // phone=''
        // email=''
        />
      <ContactCard
        contact={{name:'Green Lantern', imgUrl:'', phone:'', email:''}} 
        // name='Green Lantern' 
        // imgUrl=''
        // phone=''
        // email=''
        />
    </div>
    )
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
