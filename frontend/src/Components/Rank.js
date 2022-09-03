import React from 'react'
// import Button from './Button'
import { PieChart } from 'react-minimal-pie-chart';
import { FaCrown } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Question from './Question';

const Rank = ({ scor, rank, ranksArray }) => {
  console.log(rank)
  const [isShown, setIsShown] = useState(false);
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // e.preventDefault()

    axios.get("http://localhost:8000/practice")
      .then((data) => {
        console.log(data.data.exam)
        setQuestions(data.data.exam)
      })
      .catch(error => console.log(error))

  }, [])
const tryAgain= ()=>{
  setIsShown(true);
}
  // const [rank, setRank] = useState(0);
  // const postScore = ()=>{
  //   axios.post("http://localhost:8000/rank",{score:scor})
  //   .then(data=>{
  //     console.log("rank",data)
  //   }).catch(error=>console.log(error))
  // }
  return (
    <div>

    {!isShown && (
      <div className='rank_box'>
      <div className='icon'>
        <FaCrown />
      </div>
      <div className='complete_text'>You've Completed the Quiz!</div>
      <div className='score_result'>
        <span>Your Score:{scor} </span>
        <span>Your Rank:{rank}%</span>
        <div className='rank_chart'>
          <PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 10, color: '#C13C37' },
              { title: 'Three', value: 10, color: '#6A2135' },
              { title: 'Four', value: 10, color: '#6A2175' },
              { title: 'Five', value: 10, color: '#6A2805' },
            ]}
          />
        </div>
      </div>
      <button className="try_again" onClick={tryAgain} >Try Again</button>
    </div>)}
    {isShown && (
      <Question questions={questions}/>
    )}
      </div>
  )
}

export default Rank