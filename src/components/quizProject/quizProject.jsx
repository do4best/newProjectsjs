import React, {useState} from 'react';
import QuestionList from "./questionList.jsx";

function QuizProject(props) {
    const questions=[
        {
            question:"Who is father of Universe?",
            options:['God','Science','No One','Still Need to Be Explored'],
            answer:'Still Nee to Be Explored'
        }
    ]
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [answer,setAnswer] = useState(null)
    const [score,setScore] = useState(0)
    const handelClick=(option)=>{
        setAnswer(option)
        if(option === questions[currentQuestion].answer){
            setScore(score+1)
        }
    }
    const handelNext=()=>{
        setCurrentQuestion(currentQuestion+1)
        setAnswer(null)
    }
    return (
        <>
            {currentQuestion< questions.length?(<div className="container">
        <QuestionList question={questions[currentQuestion].question} option={questions[currentQuestion].options} handelClick={handelClick} currentAnswer={answer}/>
        <button className={`(${answer}=== null ?'disabled':'')btn btn-primary mt-5 `} style={{marginLeft:"600px"}} disabled={answer===null} onClick={handelNext}>Next</button>
        </div>):<div className={"text-center text-primary display-6"}>Your Score is {score}</div>}</>
    );
}

export default QuizProject;