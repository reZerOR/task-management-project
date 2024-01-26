/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Providers/AuthProvider';
import Section from './Section';
const List = () => {
    const [tasks,setTasks]=useState([])
    const [todo,setTodo]=useState([])
    const [progress,setprogress]=useState([])
    const [complete,setComplete]=useState([])
    const userContext=useContext(AuthContext)
    // const user=userContext.user
    useEffect(()=>{
     fetch(`http://localhost:5000/userAddedtask?email=${userContext.user.email}`)
     .then(res=>res.json())
     .then(data=>{
        console.log("from user added task",data)
        setTasks(data)
     })
    },[userContext.user.email])
    useEffect(()=>{
       const fTodo=tasks ? tasks.filter((task:any)=>task.status=== 'todo') : []
       const fProgress=tasks ? tasks.filter((task:any)=>task.status=== 'progress') : []
       const fComplete=tasks ? tasks.filter((task:any)=>task.status=== 'complete') : []
    setTodo(fTodo)
    setprogress(fProgress)
    setComplete(fComplete)
    },[tasks])
    const status=['todo','progress','complete']
    return (
        <div className='flex flex-col lg:flex-row gap-16'>
            {status.map((status,index)=><Section key={index}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            todo={todo}
            progress={progress}
            complete={complete}></Section>)}
        </div>
    );
};

export default List;