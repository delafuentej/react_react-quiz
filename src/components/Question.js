
import Options from './Options';

const Question = ({question, dispatch, answer}) => {
   
    const {id, question: q, options, correctOption, points} = question;
  return (
    <div
     key={id}
    >
         <h4>{q}</h4> 
        <Options 
            options={options}
            correctOption={correctOption}
            points={points}
            dispatch={dispatch}
            answer={answer}
        />
    </div>
  )
};

export default Question;
