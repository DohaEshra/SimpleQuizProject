import React from 'react'
import { useState } from 'react'

const Choices = ({ quest_id }) => {
    console.log(quest_id)
    const [answers, setAnswers] = useState([])
    const answerClicked = (choice) => {
        console.log("clicked!")
        setAnswers(a => [...a, { quest_id, choice }])
    }
    // removee choices component and add it to questions
    return (
        <div className='option_list'>
            <div className='option' >
                <span >adverb</span>
            </div>
            <div className='option'  >
                <span >verb</span>
            </div>
            <div className='option'  >
                <span >noun</span>
            </div>
            <div className='option'  >
                <span>adjective</span>
                {/* onClick={answerClicked("adjective")} */}
            </div>
        </div>
    )
}
// {/* <div class="d-flex justify-content-around">
//     <input type="radio" id="html" name="fav_language" value="HTML"/>
//     <label for="html">HTML</label><br/>
//     <input type="radio" id="css" name="fav_language" value="CSS"/>
//     <label for="css">CSS</label><br/>
//     <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
//     <label for="javascript">JavaScript</label>
//     <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
//     <label for="javascript">JavaScript</label>
// </div> */}
export default Choices
