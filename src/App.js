
import './App.css';
// import { Home } from './components/home/Home';
// import {Routes,Route} from "react-router-dom";
// import {Productdetails} from './components/productdetails/Productdetails'


//  function App() {
//   return <div>
//     {/* <Product/>
//      <Login/> */}
    
//    <Home/>
  
     
//       confirmationResult.confirm(OTP).then((result) => {
//       // User signed in successfully.
//        const user = result.user;
//        console.log(user)
//       // ...
//       alert("SignIn successfull")
//       }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//      // ...
//      alert("Enter Correct OTP")
//      console.log(error)
//      });
//     }
//   }

//   return (
//     <div>
//         return <div>
//         <form onSubmit={requestOTP}>
//           <div id='sign-in-button'></div>
//             <input type="mobile" name="mobile" placeholder="enter number" value={phoneNumber} onChange={(e)=>{
//               setPhoneNumber(e.target.value)
//             }}/>
//             <button>Submit</button>
//         </form>
//         <form onSubmit={verifyOTP}>
//             <input type="number" name="otp" placeholder="enter otp" value={OTP} onChange={(e)=>setOTP(e.target.value)}/>
//             <button>Submit</button>
//         </form>
//     </div>
//     </div>
//   )
// }

import React from "react";
import { Address } from './components/address/Address';
// import { Routes, Route } from "react-router-dom";
// import { Login } from "./components/authentication/login/LogIn";
// import { SignUp } from "./components/authentication/signUp/SignUp";
// import { Home } from "./components/home/Home";
// import {Product} from "./components/Product";
// import { Navbar } from "./components/navbar/Navbar";

 function App() {
  return <div>
    <Address />
     {/* <Login/>
     <SignUp/>
     <Home/> */}
     {/* <Routes>
     <Route path="/" element={<Navbar />}></Route>

     <Route path="/product" element={<Product/>}></Route>

     </Routes> */}
  </div>
 }
// </div>
   
  
// }
export default App


// import './App.css';
// import { Home } from './components/home/Home';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
//   } from "react-router-dom";


// function App() {
//   return (
//     <div >
//       <Routes>
//             <Route path='/' element={<Home/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import {CartNavbar} from './components/cart/CartNavbar'
// function App() {
//   return (
//     <div >
//       <CartNavbar/>
      
//       {/* <Routes>
//             <Route path='/' element={<Home/>} />
//       </Routes> */}
//       {/* <Productdetails/> */}
//     </div>
//   );
// }

