import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import SpinnerLoader from './components/SpinnerLoader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import CustomButton from './components/CustomButton';
import ProgressBar from './components/ProgressBar';
import FinalScreen from './components/FinalScreen';
import { Timer } from './components/Timer';

import db from './api/data.json';

const {questions} = db;



//const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;


const SECONDS_PER_QUESTION = 30;

//console.log('apiEndpoint', apiEndpoint)

const initialState = {
  questions: [],
  answeredQuestions: [],
  status: 'loading', // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  score: 0,
  highscore: 0,
  secondsRemaining: null,
};
//console.log('initialState', initialState)

function reducer(state, action){
 // console.log('state', state, 'action', action);

  switch(action.type){
    case 'dataReceived':
      return {
        ...state,
        questions: questions.sort(() => Math.random() - 0.5 ),
        // questions: action.payload.sort(() => Math.random() - 0.5 ),
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status:'error',
      }
    case 'startQuiz':
      return {
        ...state,
        status:'active',
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      }
    case 'newAnswer':
      const question = state.questions.at(state.index);
      //console.log('question from newAnswer', question)
      return {
        ...state,
        answer: action.payload,
        score: (action.payload === question.correctOption) ? state.score + question.points : state.score,
        answeredQuestions: [...state.answeredQuestions, question.id]
      }
    case 'nextQuestion':
      const remainingQuestions = state.questions.filter(q => !state.answeredQuestions.includes(q.id));

      if (remainingQuestions.length === 0) {
        return { ...state, status: 'finished' }; // ✅ Si ya no hay preguntas, termina el quiz
      }
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      const nextQuestion = remainingQuestions[randomIndex];
      return {
        ...state,
        index: state.questions.findIndex(q => q.id === nextQuestion.id),
        answer: null,
      }
    
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore: (state.score > state.highscore) ? state.score :  state.highscore,
      }
    case 'restartQuiz':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',

      }
    case 'tick-tack':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining -1,
        status: (state.secondsRemaining === 0) ? 'finished' : state.status,
      }

    default: 
      throw new Error('Unknown action')
  }


}



function App() {

  const [{questions, answeredQuestions, status, index, answer, score, highscore, secondsRemaining}, dispatch ] = useReducer(reducer, initialState);



  const numQuestions = questions.length;
  const totalPoints =  questions.reduce((sum, question) => sum + question.points, 0);

  useEffect(()=> {
    dispatch({ type: 'dataReceived', payload: questions });
  },[])
  // useEffect(()=> {
  //   const fetchQuestions = async() => {
  //     try{
  //       const res = await fetch(`${apiEndpoint}`);
  
  //       if(!res.ok) throw new Error('Something went wrong with fetching questions :(');
  
  //       const data = await res.json();

  //       dispatch({type: 'dataReceived', payload: data.sort(() => Math.random() - 0.5)})
  
  //       console.log('data', data)
  
  
  //     }catch(error){
  //       console.log(error.message);
  //       dispatch({type: 'dataFailed'});
  //     }
  //   }
  //   fetchQuestions()
  // },[])
  return (
    <div className="app">
      <Header />
      <Main>
        {(status === 'loading') && <SpinnerLoader /> }

        {(status === 'error') && <Error />}

        {(status === 'ready') && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}

        {(status === 'active') && (
          <>
          <ProgressBar score={score} numQuestions={numQuestions} index={index} answeredQuestions={answeredQuestions} totalPoints={totalPoints} answer={answer}/>
          
          <Question question={questions[index]} dispatch={dispatch} answer={answer}/>

          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/> 
          {(answer !== null && answeredQuestions.length < numQuestions -1) ? (
            <CustomButton
            className='btn btn-ui'
            handleClick={() => dispatch({type: 'nextQuestion'})}
            >Next
            </CustomButton>
          )
          :
          (answer !== null && answeredQuestions.length === numQuestions  -1) && (
            <CustomButton
            className='btn btn-ui'
            handleClick={() => dispatch({type: 'finish'})}
            >Finish
            </CustomButton>
          )
        }
          </>
          )
        } 

        {(status === 'finished') && (
          <>
            <FinalScreen score={score} highscore={highscore} totalPoints={totalPoints}/>
            <CustomButton
            className='btn btn-ui'
            handleClick={() => dispatch({type: 'restartQuiz'})}
            >Restart Quiz
            </CustomButton>
          </>
        )
        }
 
      </Main>
    
    </div>
  );
}

export default App;



