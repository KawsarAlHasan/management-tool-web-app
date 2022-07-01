import React from 'react';
import { toast } from 'react-toastify';

const ManageTodo = ({ singleTodo }) => {
    const { _id, title, description } = singleTodo;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://flannel-toonie-58250.herokuapp.com/todo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                    toast('Todo Delete Successfully!');
                })
        }
    }
    
    return (
        <div className='shadow-lg rounded text-center pb-3'>
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm btn-primary">Edit</button>
                        <button class="btn btn-sm btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTodo;