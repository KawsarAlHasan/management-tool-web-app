import React from 'react';
import AddTodo from './AddTodo';

const ToDo = (props) => {
    return (
        <div>
            <div class="flex flex-col w-full">
                <AddTodo />
                <div class="divider"></div>
                <div class="grid rounded-box place-items-center">
                    <h1>This is Title</h1>

                </div>
            </div>
        </div>
    );
};

export default ToDo;