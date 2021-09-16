import React from "react";
//icons
import CheckIcon from "../../images/icon-check.svg";
import CrossIcon from "../../images/icon-cross.svg";

function Todo({ text, todoContainer, onDelete, id, handleCompleted, btnClass, strike  }) {


    return (
        <div className={todoContainer}>
            <div onClick={ () =>  handleCompleted(id)}
            className={btnClass}> 
            <img className="check" src={CheckIcon} alt="icon" />
            </div>
            <span className="todo-text">
                {strike ? <h4 style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} >{text}</h4> 
                : 
                <h4> {text}</h4>}
            </span>
            <img onClick={() => onDelete(id)} className="cross-icon" src={CrossIcon} alt="icon" />
        </div>

    )
};

export default Todo;