import {React,useState} from "react";


function SampleForm(){

    const [fname,setFname]=useState("");
    const [rating,setRating]=useState(10);
    const [comment,setComment]=useState("");

    const handleFname= (e)=>{
        setFname(e.target.value)
    };

    const handleComment= (e)=>{
        setComment(e.target.value)
    };

    const getRating= (e)=>{
       
        setRating(e.target.value)
        console.log(rating);
    };

    function checkForm(event){
        event.preventDefault();
        if(rating<=5 && comment.length==0){
            alert("Kindly give your fedback on how we can help you");
            return;
        }
        else{
            alert("Thanks for your feedback");
            setFname("");
            setComment("");
            setRating("");
            return;
        }
       
       
    }

    return(
         <div className="sample-form">
            <form onSubmit={checkForm}>

                <div className="inputFields">
                    <label htmlFor="fname">First Name:</label>
                    <input id="fname" type="text" value={fname} onChange={handleFname}/>
                </div>

                <div className="inputFields">
                    <label htmlFor="Rating">Rating:</label>
                    <input id="rating" type="range" min={0} max={10}  value={rating} onChange={getRating}/>
                </div>

                <div className="inputFields">
                    <label htmlFor="comments">Comments:</label>
                    <input id="comments" type="textarea" value={comment} onChange={handleComment}/>
                </div>

                <div className="button-fields">
                    <button type="submit" disabled={!fname} onClick={checkForm}>submit</button>
                </div>

            </form>
         </div>
    )
}

export default SampleForm;