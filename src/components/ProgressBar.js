import { useEffect } from "react";

const ProgressBar = ({ numQuestions, score, totalPoints, answeredQuestions}) => {
  useEffect(()=>{
    if(answeredQuestions){
        document.title= `React-Quiz-Question N°${answeredQuestions.length + 1}`;

        return ()=>{
            document.title= 'React-Quiz'
        }
    }
    

},[answeredQuestions]);
  return (
    <header className='progress'>
        <progress max={numQuestions} value={answeredQuestions.length}/>
        <p>Question: <strong>{answeredQuestions.length +1}</strong>/{numQuestions}</p>
        <p><strong>{score}</strong>/{totalPoints} points</p>

    </header>
  )
}

export default ProgressBar;