import { useEffect } from "react";

export const Timer = ({dispatch, secondsRemaining}) => {

    const minuts = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect(()=>{

       const timer =  setInterval(()=>{
            dispatch({type: 'tick-tack'})
        },1000)

        return () => clearInterval(timer)
    },[dispatch]);



  return (
    <div className="timer">{`${minuts < 10 ? '0'+ minuts : minuts}:${seconds < 10 ? '0'+ seconds : seconds}`}</div>
  )
}
