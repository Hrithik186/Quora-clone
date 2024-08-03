import React from "react";
import "./Post.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";
function Post({ question, category }) {
  
  return (
    <div className="post">
      <div
        style={{
          border: "1px solid black",
          borderTop: "hidden",
          borderRight: "hidden",
          borderLeft: "hidden",
        }}
      >
        <h2>{question}</h2>
        <p className="category">Category: {category}</p> {/* Display category */}
      </div>
      <div style={{ marginTop: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ChatBubbleOutlineOutlinedIcon style={{ cursor: "pointer" }} />
          <button
            style={{
              marginLeft: "5px",
              border: "1px solid black",
              borderRadius: "50px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Link to={"/question"}>Answers</Link>
          </button>
        </div>
      </div>
      <div
        style={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          marginTop: "10px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <input
            type="text"
            placeholder="Add a comment"
            style={{
              borderRadius: "50px",
              padding: "10px",
              marginRight: "10px",
              width: "80%",
            }}
          ></input>
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "#f52936",
              color: "white",
              padding: "10px",
              borderRadius: "50px",
            }}
          >
            Add comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
// src/components/Post.js
// import React, { useState } from "react";
// import "./Post.css";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import { Link } from "react-router-dom";

// function Post({ question, addComment, comments }) {
//   const [comment, setComment] = useState("");

//   const handleAddComment = () => {
//     if (comment.trim() !== "") {
//       addComment(question.id, comment);
//       setComment("");
//     }
//   };

//   return (
//     <div className="post">
//       <div
//         style={{
//           border: "1px solid black",
//           borderTop: "hidden",
//           borderRight: "hidden",
//           borderLeft: "hidden",
//         }}
//       >
//         <h2>{question.text}</h2>
//         <p className="category">Category: {question.category.join(", ")}</p>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <ChatBubbleOutlineOutlinedIcon style={{ cursor: "pointer" }} />
//           <button
//             style={{
//               marginLeft: "5px",
//               border: "1px solid black",
//               borderRadius: "50px",
//               backgroundColor: "white",
//               cursor: "pointer",
//             }}
//           >
//             <Link to={`/question/${question.id}`}>Answers</Link>
//           </button>
//         </div>
//       </div>
//       <div
//         style={{
//           height: "40px",
//           display: "flex",
//           alignItems: "center",
//           marginTop: "10px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             width: "100%",
//             justifyContent: "flex-end",
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Add a comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             style={{
//               borderRadius: "50px",
//               padding: "10px",
//               marginRight: "10px",
//               width: "80%",
//             }}
//           ></input>
//           <button
//             onClick={handleAddComment}
//             style={{
//               cursor: "pointer",
//               backgroundColor: "#f52936",
//               color: "white",
//               padding: "10px",
//               borderRadius: "50px",
//             }}
//           >
//             Add comment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Post;

