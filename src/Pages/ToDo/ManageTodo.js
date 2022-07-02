import React from 'react';
import { toast } from 'react-toastify';

const ManageTodo = ({ singleTodo }) => {
    const { _id, date, title, description } = singleTodo;

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
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h1 className='	text-success'>{date}</h1>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">


                        <label htmlFor="my-modal-6" className="btn modal-button btn-sm btn-primary">Edit</label>
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>
                        
                        <button className="btn btn-sm btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTodo;