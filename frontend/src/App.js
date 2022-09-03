import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Components/Question';

function App() {
  //start test button
  const [isShown, setIsShown] = useState(false);
  const [questions, setQuestions] = useState([])

  //get questions
  useEffect(() => {

    axios.get("http://localhost:8000/practice")
      .then((data) => {
        console.log(data.data.exam)
        setQuestions(data.data.exam)
      })
      .catch(error => console.log(error))

  }, [])




  const startTest = () => {
    setIsShown(true);
  }

  return (
    <div className="container ">
      <div className='start_btn'>
        <button onClick={startTest} >Practice Test</button>
      </div>
      {/* if exam started show questions */}
      {isShown && (
        <div>
          <Question questions={questions} />
        </div>
      )}
    </div>
  );
}

export default App;
