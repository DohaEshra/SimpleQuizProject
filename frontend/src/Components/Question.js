import React from 'react'
import Choices from './Choices'
import Button from './Button'
import Rank from './Rank'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Question = ({ questions }) => {
    // console.log(questions)
    // console.log(increment)
    // const [nextBtnClick, setNextBtnClick] = useState(false);
    const [increment, setIncrement] = useState(0)
    const [question, setQuestion] = useState(questions[increment])
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [isShown, setIsShown] = useState(false);
    const [rank, setRank] = useState(0);
    const [ranks, setRanks] = useState([]);
    console.log(increment)
    // console.log(increment)

    const Choices = ["adverb", "verb", "noun", "adjective"]
    // let i = 0;
    // get next question
    const nextClicked = () => {
        // console.log(increment, question.word)
        setIncrement(incremen=>incremen+1)
        console.log(increment)
        if (increment < questions.length) {
            console.log(questions[increment])
            setQuestion(questions[increment])
            // console.log(increment, question.word)
        }
        else {//get score
            console.log("in else getscore")
            getScore();
            console.log(getScore())
            console.log("score", score)
            setIsShown(true)
            getScore()
            // postScore()
        }
    }
    //add his answer to answers array
    const answerClicked = (q_id, choice) => {
        // console.log(q_id, choice)
        console.log(checkAnswer(choice));
        setAnswers(a => [...a, checkAnswer(choice)])
    }

    //check his answer
    const checkAnswer = (choice) => {
        if (question.pos === choice) return true;
        else return false
        //    () question.pos==choice ? true:false)
    }
    //get score 
    const getScore = () => {

        let scor = 0;
        answers.map(a => {
            if (a) {
                // scor += 10
            setScore(oldScore => oldScore + 10);
            }
            else {
                //do nothing
            }
        })
        postScore(score);
        console.log(score)
        // postScore()
        // return score;
    }
    const postScore = (s) => {
        console.log(s)
        axios.post("http://localhost:8000/rank", { score: s })
            .then(data => {
                console.log("rank", data.data.rank)
                setRank(data.data.rank)
                setRanks(data.data.Ranks)
            }).catch(error => console.log(error))
    }
    

    return (

        <div>
            {!isShown && (
                <section className='quiz_box'>
                    <div className='que_text'>
                        <span>{question.word}</span>
                    </div>
                    {/* choices */}
                    <div className='option_list'>
                        {Choices.map((choice, index) => (
                            <div className='option' onClick={() => answerClicked(question.id, choice)}>
                                <span key={index} >{choice}</span>
                            </div>
                        ))}
                    </div>
                    <footer>
                        <button className="next_btn" onClick={()=>{nextClicked()}}>Next Question</button>
                    </footer>
                </section>
            )}
            {isShown && (
                <Rank scor={score} rank={rank} ranksArray={ranks} />
            )}
        </div>
    )


}
export default Question
