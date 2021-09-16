import React, { useState, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import Todo from "./Todo/Todo";



function Home({ icon, iconChange, inputContainer, todoContainer, input, footer }) {

    const [todo, setTodo] = useState("");

    // There was an attempt to use "useLocalStorage " hook instead of useState 
    //to save data to browser to make the app minimally usable but was to buggy 
    const [array, setArray] = useLocalStorage("array",[
        {
            id: 0,
            task: "Get Your Coffee",
            completed: false
        },
        {
            id: 1,
            task: "Check your TODO",
            completed: false
        }]);

    const [activeArray, setActiveArray] = useState([]);
    const [completedArray, setCompletedArray] = useState([]);

    const [inputValue, setInputValue] = useState();
    const [allBtn, setAllBtn] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);
    const [completeBtn, setCompleteBtn] = useState(false);


    let remaining = array.length;
    let remainingActive;
    let remainingCompleted;

    // setting state of input value and todo item which is pushed to array
    function handleChange(e) {
        setTodo(e.target.value);
        setInputValue(e.target.value);

    }


    // Limiting no. of characters inputted to prevent text overflow in todo components
    function limit(e) {
        var max_chars = 40;

        if (e.target.value.length > max_chars) {
            e.target.value = e.target.value.substr(0, max_chars);
        }
    }


    // adding new items to the array and prevent adding a whitespace item into array
    function handleClick() {

        const tasks = [...array,
        {
            id: array.length,
            task: todo,
            completed: false
        }]

        todo.trim().length ? setArray(tasks)
            : setArray([...array])
        setTodo("");
        setInputValue("");
        setAllBtn(false);
    }

    function handleKeyPress(e) {
        let code = e.keyCode || e.which
        if (code === 13) {
            const tasks = [...array,
            {
                id: array.length,
                task: todo,
                completed: false
            }]

            todo.trim().length ? setArray(tasks)
                : setArray([...array])
            setTodo("");
            setInputValue("");
            setAllBtn(false);
        }
    }


    //Handling the delete button for each seperate todo item
    function handleDelete(id) {
        setArray(prevArray => {
            return prevArray.filter((todo, index) => {
                return index !== id
            })
        })
    }

    // to render all todo items (active and complete) if the activeArray or completedArray is being rendered
    function returnAll() {

        if (allBtn === true) {
            setAllBtn(false);
            setActiveBtn(false);
            setCompleteBtn(false);
        }

    }

    // To update the activeArray if item is checked as completed -- updates on useEffect with array as dep.
    function insideReturnActive() {
        const activeTasks = array.filter((todo) => {
            return todo.completed === false
        })
        setActiveArray(activeTasks)
    }

    function returnActive() {
        setAllBtn(true);
        setActiveBtn(true);
        setCompleteBtn(false);
        insideReturnActive()


    }

    // To update completedArray if item is unchecked to be active again -- updates on useEffect with array as dep.

    function insideReturnComplete() {
        const completedTasks = array.filter((todo) => {
            return todo.completed === true
        })
        setCompletedArray(completedTasks)
    }

    function returnComplete() {
        setCompleteBtn(true);
        setAllBtn(true);
        setActiveBtn(false);
        insideReturnComplete()

    }

    //To update active and complete arrays without triggering parent function

    useEffect(() => {
        insideReturnActive()
        insideReturnComplete()
    }, [array])


    // OnClick to toggle the "completed" key in the array object and assigning new arrays 
    //beside the main "array" to dynamically display each one without affecting the main "array"
    function handleCompleted(id) {
        const fullArray = array.map((todo, index) => {
            if (id === index && todo.completed === false) {
                return { ...todo, completed: true }
            } else if (id === index && todo.completed === true) {
                return { ...todo, completed: false }
            } else {
                return todo
            }
        })
        setArray(fullArray)

        const active = activeArray.map((todo, index) => {
            if (id === index && todo.completed === false) {
                return { ...todo, completed: true }
            } else if (id === index && todo.completed === true) {
                return { ...todo, completed: false }
            } else {
                return todo
            }
        })
        setActiveArray(active)

        const complete = completedArray.map((todo, index) => {
            if (id === index && todo.completed === false) {
                return { ...todo, completed: true }
            } else if (id === index && todo.completed === true) {
                return { ...todo, completed: false }
            } else {
                return todo
            }
        })
        setActiveArray(complete)
    }

    // Deleting the completed todo in both array and CompletedArray
    function deleteComplete() {
        setArray(prevArray => {
            return array.filter((todo) => {
                return todo.completed !== true
            })
        })
        setCompletedArray([]);
    }





    return (
        <div className="home">

            <div className="header-title">

                <h1>TODO</h1>

                <img src={icon} onClick={iconChange} alt="icon" />
            </div>

            <div className={inputContainer}>
                <button onClick={handleClick} class="input-btn"></button>
                <input onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onKeyDown={limit}
                    onKeyUp={limit} class={input} placeholder="Create a new Todo..." type="text" value={inputValue} />
            </div>


            {!allBtn ?
                array.map((todo, index) => {
                    return <Todo
                        key={index}
                        id={index}
                        text={todo.task}
                        todoContainer={todoContainer}
                        onDelete={handleDelete}
                        handleCompleted={handleCompleted}
                        // toggling classes of check button based on the completed key value
                        btnClass={todo.completed ? "input-btn-click" : "input-btn"}
                        strike={todo.completed ? true : false}
                    />
                }) : activeBtn ?
                    activeArray.map((todo) => {
                        return <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.task}
                            todoContainer={todoContainer}
                            onDelete={handleDelete}
                            handleCompleted={handleCompleted}
                            btnClass={todo.completed ? "input-btn-click" : "input-btn"}
                        />
                    })
                    : completeBtn ?
                        completedArray.map((todo) => {
                            return <Todo
                                key={todo.id}
                                id={todo.id}
                                text={todo.task}
                                todoContainer={todoContainer}
                                onDelete={handleDelete}
                                handleCompleted={handleCompleted}
                                btnClass={todo.completed ? "input-btn-click" : "input-btn"}
                            />
                        }) : null}

            <div className={footer}>
                <span>
                    <h6>
                        { // to dynamically display the number of remaining items based on the selected
                            // array " array - activeArray - completedArray"
                            activeBtn ? remainingActive = activeArray.length
                                : completeBtn ? remainingCompleted = completedArray.length
                                    : remaining + ""} items left</h6>
                </span>


                <a onClick={returnAll} className="footer-btn" >All</a>

                <a onClick={returnActive} className="footer-btn">Active</a>

                <a onClick={returnComplete} className="footer-btn">Completed</a>

                <a onClick={deleteComplete} className="footer-btn">Clear Completed</a>

            </div>
        </div>
    )
};

export default Home;