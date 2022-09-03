import Question from "./Question"
const Questions = ({ questions }) => {
  console.log(questions)
  return (
    <>
      {
        questions.map((ques) => (
          <Question key={ques.id} quest={ques.word} />
        ))}
    </>
  )
}

export default Questions
