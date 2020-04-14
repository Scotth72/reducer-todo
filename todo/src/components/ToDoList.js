import React, {useState, useReducer} from 'react';
import heathReducer, {initialState, Reducer } from '../reducers/reducer';



function Form (){
    const [toDo, setToDo] = useState ("");
    const [state,dispatch] = useReducer(heathReducer, initialState)

    const handleChanges = e => {
        setToDo(e.target.value);
    }

    return(
        <div>
            <form>
                {initialState.map(item => {
                    return(
                        <div>
                            <h2>Task: {item.task}</h2>
                        </div>
                    )
                })}
                <label>
                    <input
                        id="taskInput"
                        name="taskInput"
                        type="text"
                        value={toDo}
                        onChange={handleChanges}
                    />    
                </label><br/>
                <button onSubmit={() => dispatch({ type: 'ADD_TODO'})}>Add Task</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}


export default Form;