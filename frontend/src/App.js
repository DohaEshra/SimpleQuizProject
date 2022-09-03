// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./Components/Header"; 
import Button from './Components/Button';
import Questions from './Components/Questions';
import Rank from './Components/Rank'

import { useEffect, useState } from 'react'
import axios from 'axios';
import Question from './Components/Question';

function App() {
  const [questions, setQuestions] = useState([])

  //     [ 
  //     {
  //         id: 1,
  //         word: "slowly",
  //         pos: "adverb"
  //     },
  //     {
  //         id: 2,
  //         word: "ride",
  //         pos: "verb"
  //     },
  //     {
  //         id: 3,
  //         word: "bus",
  //         pos: "noun"
  //     }
  // ]
  useEffect(() => {
    // e.preventDefault()

    axios.get("http://localhost:8000/practice")
      .then((data) => {
        console.log(data.data.exam)
        setQuestions(data.data.exam)
      })
      .catch(error => console.log(error))

  }, [])


  //start test
  const [isShown, setIsShown] = useState(false);

  // if (!questions) return null;

  const startTest = () => {
    setIsShown(true);
    // console.log(questions)
    // get_Questions()
  }

  return (
    <div className="container ">
      <div className='start_btn'>
        <Button text='Practice Test' fun={startTest} />
      </div>
      {/* if exam started show questions */}
      {isShown && (
        <div>
          <Question questions={questions} />
          {/* <Questions questions = {questions}/> */}
        </div>
      )}
      <div>
        {/* <Rank/> */}
      </div>

    </div>
  );
}

export default App;
