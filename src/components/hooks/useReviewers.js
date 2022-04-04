import { useEffect, useState } from "react"

const useReviewers = () =>{
    const[reviewers,setReviewers]=useState([]);
    useEffect( ()=>{
        fetch('reviewdata.json')
        .then(res => res.json())
        .then (data => setReviewers(data))
    },[]);
    return [reviewers,setReviewers]
}
export default useReviewers;