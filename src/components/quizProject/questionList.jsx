import React from 'react';

function QuestionList({question,option,handelClick,currentAnswer}) {
    return (
        <>
        <h2 className={"text-center text-primary display-6"}>{question}</h2>
            <ul className={"list-group table-hover"}>{
                option.map((option,index)=>(
                    <li key={index} className={`{${currentAnswer}?'select':'' list-group-item`} onClick={()=>handelClick(option)}>{option}</li>
                ))
            }</ul>
        </>
    );
}

export default QuestionList;