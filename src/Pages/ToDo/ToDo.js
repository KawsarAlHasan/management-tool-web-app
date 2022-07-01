import React from 'react';
import AddTodo from './AddTodo';
import UseTodo from '../Shared/UseTodo';
import Loading from '../Shared/Loading';
import ManageTodo from './ManageTodo';
import './ToDo.css';

const ToDo = (props) => {

    const [todo, isLoading] = UseTodo();

    return (
        <div>
            <div class="flex flex-col w-full">
                <AddTodo />
                <div class="divider"></div>
                <div className="text-center sm:container sm:mx-auto todo-container">
                    {isLoading ? <Loading /> :
                        todo.map(singleTodo => <ManageTodo
                            key={singleTodo._id}
                            singleTodo={singleTodo}
                        ></ManageTodo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;