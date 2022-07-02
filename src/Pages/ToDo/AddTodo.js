import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTodo = ({date}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://flannel-toonie-58250.herokuapp.com/addTodo`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.reload(false);
                toast('Todo Added Successfully!');
            })
    };

    return (
        <div>
            <div className='text-center container w-50 my-3'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='input input-bordered input-info w-full max-w-xl mb-1' placeholder='Todo Title' {...register("title", { required: true })} /> <br />
                    <input className='input input-bordered input-info w-full max-w-xl mb-1' defaultValue={date} {...register("date", { required: true })} /> <br />
                    <textarea className='textarea textarea-info w-full max-w-xl mb-1' placeholder='Description' {...register("description", { required: true })} /> <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-info w-full max-w-xl' value="Add ToDo" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTodo;
