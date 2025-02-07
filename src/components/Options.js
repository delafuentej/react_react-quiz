

import CustomButton from "./CustomButton";

const Options = ({options, dispatch, answer, correctOption}) => {




    const hasAnswered =  answer !== null;
  return (
    <div className='options'>
    {options.map((option, i) => (
    <CustomButton
        key={option}
        className={`
            btn btn-option 
            ${( i === answer) ? 'answer' : ''} 
            ${hasAnswered && (i === answer) && (answer === correctOption) ? 'right' : ''}
             ${hasAnswered && (i === answer) && (answer !== correctOption) ? 'false' : ''}
            ${(hasAnswered) ? (i === correctOption) ? 'correct' : 'wrong': ''}
            `}
            
        handleClick={() => dispatch({type: 'newAnswer', payload: i})}
        disabled={hasAnswered}
    >
        {option}
    </CustomButton>
)

)}

</div>
  )
}

export default Options;
