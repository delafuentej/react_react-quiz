import { useEffect } from "react";

 const FinalScreen = ({score, highscore, totalPoints}) => {

 
    const percentage = ((score/totalPoints) * 100).toFixed(2);

    useEffect(()=>{
      if(percentage){
          document.title= `React-Quiz-Your Hit Rate:${percentage}`;
  
          return ()=>{
              document.title= 'React-Quiz'
          }
      }
    },[]);

    let emoji;
    if(percentage === 100) emoji = '🥇'
    if(percentage >= 80 && percentage < 100) emoji = '🥈'
    if(percentage >= 60 && percentage < 80) emoji = '🥉'
     if(percentage >= 50 && percentage < 60) emoji = '👍'
      if(percentage >= 0 && percentage < 50) emoji = '👎'
  return (
    <>
      <div className='result'>
        <span>{emoji}</span>You scored <stron>{score} out of {totalPoints}</stron>
        ({Math.ceil(percentage)}%)
      </div>
      <p className="highscore">Your highscore: {highscore} points</p>
    </>
  )
   
    
};

export default FinalScreen;
