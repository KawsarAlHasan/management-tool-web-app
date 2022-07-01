import { useEffect, useState } from 'react';

 const UseTodo = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://flannel-toonie-58250.herokuapp.com/todo')
            .then(res => res.json())
            .then(data => {
                setTodo(data)
                setIsLoading(false)
            });
    }, []);
    return [todo, isLoading, setTodo]
 }

 export default UseTodo;