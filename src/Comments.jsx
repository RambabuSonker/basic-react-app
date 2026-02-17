import { useState } from "react"
import "./Comments.css";
import CommentsForm from "./CommentsForm";

export default function Comments(){
        let [comments, setComments]=useState([{
                username: "@rs",
                remarks: "great job !",
                rating: 5
        }]);

        let addNewComment = (comment)=>{
          setComments((currComments)=> [...currComments, comment]);
        };

        return (
                <>
                <div>
                        <h3>All Commets</h3>
                        {comments.map((comment, idx)=>(
                               <div className ="Comment" key={idx}>
                                <span><i>{comment.remarks}</i></span>
                                &nbsp;
                                <span>(rating={comment.rating})</span>
                                <p>- {comment.username}</p>
                        </div> 
                        ))}
                </div>
                <hr></hr>
                <CommentsForm addNewComment={addNewComment} />
                </>
                
        );
}