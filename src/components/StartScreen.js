import CustomButton from "./CustomButton";

const StartScreen = ({numQuestions, dispatch}) => {
    return (
        <div className="start">
            <h2>Welcome to the React Quiz!</h2>
            <h3>{numQuestions} question to test you React mastery 🤓</h3>
            <CustomButton
                className='btn btn-ui'
                handleClick={()=> dispatch({type: 'startQuiz'})}
            >   Let's start
            </CustomButton>
        </div>
    )
}

export default StartScreen;
