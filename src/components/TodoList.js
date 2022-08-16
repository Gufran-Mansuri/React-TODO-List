// "StAuth10244: I Mohamed Gufran Sarfaraz Mansuri, 000836816 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
import React, {useState, useEffect} from 'react';
import CreateTask from '../modals/createTask.js';
import Cards from './Cards'





const TodoList = () => {
    //localStorage.clear()
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([{
            Name: "Javascript",
            Description: "learn javascript from 5 to 10",
        },
        {
            Name: "HTML and CSS",
            Description: "learn HTML and CSS from 5 to 10",
        },
        {
            Name: "React",
            Description: "learn React from 5 to 10",
        }]);
    useEffect(()=>{
        let arr = localStorage.getItem('taskList');
        
        if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    } ,[])
    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }
    const permanantDeleteTask = () => {
        let tempList = taskList;
        tempList.splice(0, tempList.length);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }
    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload(); 
    }
    const toggle = () => setModal(!modal);
    const saveTask = (task) => {
        let tempList = taskList;
        tempList.push(task);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    }
    return (
        <div>
            <div className='header text-center' >
                <h3>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
                {taskList && taskList.map((obj, index) => <Cards taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}
            </div>
            <CreateTask  toggle={toggle} modal={modal} save={saveTask} />
            <div className='text-center'>
                <button className='btn btn-danger ' onClick={permanantDeleteTask} style={{"padding":"15px", "width": "20%"}}>Delete All</button>
            </div>   
        </div>
        
    );
};

export default TodoList;