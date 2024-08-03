// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import './App.css';
import { Context } from "./context/context";

function App() {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Router>
      {/* <TopBar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={user ? <HomePage /> : <SignupPage />} />
        <Route path="/login" element={user ? <HomePage /> : <LoginPage />} />
        <Route path="/question" element={user ? <QuestionPage /> : <SignupPage />} />
        {/* <Route path="/settings" element={user ? <Settings /> : <Register />} /> */}
        {/* <Route path="/post/:postId" element={<Single />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
// src/App.js
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import QuestionPage from './pages/QuestionPage';
// import LoginPage from "./pages/LoginPage";
// import SignupPage from './pages/SignupPage';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import './App.css';

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const AuthRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <Navigate to="/" /> : children;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="app">
//           <Routes>
//             <Route path="/login" element={
//               <AuthRoute>
//                 <LoginPage />
//               </AuthRoute>
//             } />
//             <Route path="/register" element={
//               <AuthRoute>
//                 <SignupPage />
//               </AuthRoute>
//             } />
//             <Route path="/" element={
//               <PrivateRoute>
//                 <HomePage />
//               </PrivateRoute>
//             } />
//             <Route path="/question/:id" element={
//               <PrivateRoute>
//                 <QuestionPage />
//               </PrivateRoute>
//             } />
//             <Route path="/question" element={
//               <PrivateRoute>
//                 <QuestionPage />
//               </PrivateRoute>
//             } />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
    // <Router>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/register" >{user ? <HomePage /> : <SignupPage />}</Route>
    //       <Route path="/question/:id" element={<QuestionPage />} />
    //       <Route path="/question" element={<QuestionPage />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/register" element={<SignupPage />} />
    //     </Routes>
    //   </div>
    // </Router>