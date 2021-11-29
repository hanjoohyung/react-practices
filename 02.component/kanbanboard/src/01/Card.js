import React from 'react';
import TaskList from './TaskList.js'

export default function({title, description, tasks}) {
    return (
        <div className='Card'>
            <div className='Card__Title'>{title}</div>
            <div className='Card__Details'>
                {description}
            </div>
            <TaskList tasks = {tasks} />
        </div> 
    );
}