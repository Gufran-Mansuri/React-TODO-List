// "StAuth10244: I Mohamed Gufran Sarfaraz Mansuri, 000836816 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const handleChange = (e) => { 
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'taskName') {
            setTaskName(value);
        } else {
            setTaskDescription(value);
        }
    }
    const handleSave = (e) => {
        e.preventDefault();
        let task = {}
        task["Name"] = taskName;
        task["Description"] = taskDescription;
        save(task);
    }
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group' >
                        <label>Task Name</label>
                        <input type="text" className='form-control' 
                        onChange = {handleChange}
                        name ='taskName'
                        placeholder='Task name'/>
                    </div>
                    <div className='form-group' >
                        <label>Description</label>
                        <textarea  rows='5' className='form-control'  onChange = {handleChange}
                        name = 'taskDescription' placeholder='Description'>
                        </textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;