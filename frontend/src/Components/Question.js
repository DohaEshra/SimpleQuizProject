import React from 'react'
import Rank from './Rank'
import { useState} from 'react'
import axios from 'axios'

const Question = ({ questions }) => {
    const [increment, setIncrement] = useState(0)
    const [question, setQuestion] = useState(questions[increment])
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [isShown, setIsShown] = useState(false);
    const [rank, setRank] = useState(0);
    const [ranks, setRanks] = useState([]);


    const Choices = ["adverb", "verb", "noun", "adjective"]

    // get next question
    const nextClicked = () => {

        setIncrement(incremen => incremen + 1)
        console.log(increment)
        if (increment < questions.length) {
            console.log(questions[increment])
            setQuestion(questions[increment])
        }
        else {//get score
        
            getScore();
            console.log("score", score)
            setIsShown(true)
        }
    }
    //add his answer to answers array
    const answerClicked = (q_id, choice) => {
        console.log(checkAnswer(choice));
        setAnswers(a => [...a, checkAnswer(choice)])
    }

    //check his answer
    const checkAnswer = (choice) => {
        if (question.pos === choice) return true;
        else return false
    }
    //get score 
    const getScore = () => {

        let scor = 0;
        answers.map(a => {
            if (a) {
                scor += 10
                setScore(oldScore => oldScore + 10);
            }
        })
        postScore(scor);
        console.log(score)
    }
    //post score to the server to get rank
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
                        <button className="next_btn" onClick={() => { nextClicked() }}>Next Question</button>
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
