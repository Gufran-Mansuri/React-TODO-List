// "StAuth10244: I Mohamed Gufran Sarfaraz Mansuri, 000836816 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const handleChange = (e) => { 
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'taskName') {
            setTaskName(value);
        } else {
            setTaskDescription(value);
        }
    }
    useEffect(() => {
        setTaskName(taskObj.Name);
        setTaskDescription(taskObj.Description);
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj["Name"] = taskName;
        tempObj["Description"] = taskDescription;
        updateTask(tempObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group' >
                        <label>Task Name</label>
                        <input type="text" className='form-control' value = {taskName}
                        onChange = {handleChange}
                        name ='taskName'/>
                    </div>
                    <div className='form-group' >
                        <label>Description</label>
                        <textarea  rows='5' className='form-control' value={taskDescription} onChange = {handleChange}
                        name = 'taskDescription'>
                        </textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;