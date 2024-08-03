// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './QuestionPage.css';
// import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

// function QuestionPage() {
//   const { id } = useParams();

//   // Simulated question and answers (In real application, fetch these from an API)
//   const question = {
//     id,
//     title: 'What is React?',
//     content: 'React is a JavaScript library for building user interfaces.',
//     answers: [
//       'React is maintained by Facebook and a community of individual developers and companies.',
//       'React can be used as a base in the development of single-page or mobile applications.',
//     ],
//   };

//   // State to manage upvotes and downvotes for each answer
//   const [votes, setVotes] = useState(question.answers.map(() => ({ upvotes: 0, downvotes: 0 })));

//   const handleUpvote = (index) => {
//     const newVotes = [...votes];
//     newVotes[index].upvotes += 1;
//     setVotes(newVotes);
//   };

//   const handleDownvote = (index) => {
//     const newVotes = [...votes];
//     newVotes[index].downvotes += 1;
//     setVotes(newVotes);
//   };

//   return (
//     <div className="questionPage">
//       <div className="questionPage__container">
//         <h1>{question.title}</h1>
//         <p>{question.content}</p>
//         <div className="questionPage__answers">
//           <h2>Answers:</h2>
//           {question.answers.map((answer, index) => (
//             <div key={index} className="questionPage__answer">
//               {answer}
//               <div className="questionPage__votes" style={{display: "flex", alignItems: "center"}}>
//                 <button onClick={() => handleUpvote(index)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50px"}}><ArrowUpwardOutlinedIcon style={{color: "rgba(46, 105, 244, 1)"}}/>Upvote<span>{votes[index].upvotes}</span></button>
//                 <button onClick={() => handleDownvote(index)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50px"}}><ArrowDownwardOutlinedIcon /></button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
// src/pages/QuestionPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './QuestionPage.css';

function QuestionPage({ questions, comments }) {
  const { id } = useParams();
  const question = questions.find(q => q.id.toString() === id);

  return (
    <div className="questionPage">
      <div className="questionPage__container">
        {question ? (
          <>
            <h1>{question.text}</h1>
            <p>Category: {question.category.join(", ")}</p>
            <div className="questionPage__answers">
              <h2>Comments:</h2>
              {comments[id]?.map((comment, index) => (
                <div key={index} className="questionPage__answer">
                  {comment}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Question not found</p>
        )}
      </div>
    </div>
  );
}

export default QuestionPage;

