import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AddTodo from './AddTodo';
import UseTodo from '../Shared/UseTodo';
import Loading from '../Shared/Loading';
import ManageTodo from './ManageTodo';
import './ToDo.css';

const ToDo = (props) => {

    const [selected, setSelected] = useState(new Date());
    const [todo, isLoading] = UseTodo();

    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full justify-center lg:flex-row">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                    <div className="divider md:divider-horizontal"></div>
                    <AddTodo date={format(selected, 'PP')} />
                </div>
                <div className="divider"></div>
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