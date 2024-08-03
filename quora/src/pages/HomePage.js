import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import QuestionBox from '../components/QuestionBox';
import './HomePage.css';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [catQuery, setCatQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="homePage">
      <Header setSearchQuery={setSearchQuery} />
      <div className="homePage__content">
        <Sidebar setCatQuery={setCatQuery}/>
        <div className="homePage__main">
          <QuestionBox searchQuery={searchQuery} catQuery={catQuery} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
// src/pages/HomePage.js
// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import QuestionBox from '../components/QuestionBox';
// import QuestionPage from './QuestionPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './HomePage.css';

// function HomePage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [catQuery, setCatQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState([]);
//   const [questions, setQuestions] = useState([]);
//   const [comments, setComments] = useState({});

//   const addQuestion = (question) => {
//     setQuestions([...questions, question]);
//   };

//   return (
//     <Router>
//       <div className="homePage">
//         <Header setSearchQuery={setSearchQuery} />
//         <div className="homePage__content">
//           <Sidebar setCatQuery={setCatQuery} />
//           <div className="homePage__main">
//             <Routes>
//               <Route path="/" element={<QuestionBox searchQuery={searchQuery} catQuery={catQuery} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} addQuestion={addQuestion} questions={questions} comments={comments} setComments={setComments} />} />
//               <Route path="/question/:id" element={<QuestionPage questions={questions} comments={comments} />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default HomePage;
