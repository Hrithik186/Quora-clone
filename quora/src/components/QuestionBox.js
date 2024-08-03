import React, { useContext, useEffect, useState } from "react";
import "./QuestionBox.css";
import Post from "./Post";
import { Context } from '../context/context';
import axios from "axios";

function QuestionBox({ searchQuery, catQuery, selectedCategory, setSelectedCategory }) {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const { user } = useContext(Context);

  // Fetch questions from the API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim() || !selectedCategory) {
      alert("Question and category are required.");
      return;
    }

    const newPost = {
      username: user.username,
      desc: question,
      category: selectedCategory
    };
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      setQuestions(prevQuestions => [...prevQuestions, res.data]);
      setQuestion(""); // Clear the input field
      setSelectedCategory(""); // Clear the selected category
    } catch (err) {
      console.error(err);
    }
  };

  // Ensure searchQuery and catQuery are strings and not undefined
  const normalizedSearchQuery = searchQuery ? searchQuery.toLowerCase() : '';
  const normalizedCatQuery = catQuery ? catQuery.toLowerCase() : '';

  // Filter questions based on searchQuery and catQuery
  let filteredQuestions = questions.filter(q => q.desc && q.desc.toLowerCase().includes(normalizedSearchQuery));
  if (normalizedCatQuery) {
    filteredQuestions = filteredQuestions.filter(q => q.category && q.category.toLowerCase().includes(normalizedCatQuery));
  }

  return (
    <div style={{ width: "100%" }}>
      <div className="questionBox">
        <input
          type="text"
          placeholder="Ask a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleSubmit}>Post</button>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" disabled>Select Category</option>
          <option value="Finance">Finance</option>
          <option value="Health">Health</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Animals">Animals</option>
        </select>
      </div>
      <div className="questionsList">
        <div>
          {filteredQuestions.map((q, index) => (
            <Post key={index} question={q.desc} category={q.category || selectedCategory} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;

// src/components/QuestionBox.js
// import React, { useState } from "react";
// import "./QuestionBox.css";
// import Post from "./Post";

// function QuestionBox({ searchQuery, catQuery, selectedCategory, setSelectedCategory }) {
//   const [question, setQuestion] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [comments, setComments] = useState({});

//   const handlePost = () => {
//     if (question.trim() !== "") {
//       setQuestions([...questions, { text: question, category: selectedCategory, id: questions.length }]);
//       setQuestion("");
//       setSelectedCategory([]);
//     }
//   };

//   const addComment = (questionId, comment) => {
//     setComments(prevComments => ({
//       ...prevComments,
//       [questionId]: [...(prevComments[questionId] || []), comment],
//     }));
//   };

//   const normalizedSearchQuery = searchQuery ? searchQuery.toLowerCase() : '';
//   const normalizedCatQuery = catQuery ? catQuery.toLowerCase() : '';
//   var filteredQuestions = questions.filter(q => q.text.toLowerCase().includes(normalizedCatQuery));
//   filteredQuestions = questions.filter(q => q.text.toLowerCase().includes(normalizedSearchQuery));

//   return (
//     <div style={{ width: "100%" }}>
//       <div className="questionBox">
//         <input
//           type="text"
//           placeholder="Ask a question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button onClick={handlePost}>Post</button>
//         <select multiple value={selectedCategory} onChange={(e) => setSelectedCategory(Array.from(e.target.selectedOptions, option => option.value))}>
//           <option disabled>Select Category</option>
//           <option value="Finance">Finance</option>
//           <option value="Health">Health</option>
//           <option value="Science">Science</option>
//           <option value="Technology">Technology</option>
//           <option value="Animals">Animals</option>
//         </select>
//       </div>
//       <div className="questionsList">
//         <div>
//           {filteredQuestions.map((q, index) => (
//             <Post key={index} question={q} addComment={addComment} comments={comments[q.id] || []} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionBox;

