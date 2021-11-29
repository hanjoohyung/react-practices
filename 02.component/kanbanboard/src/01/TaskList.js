import React from 'react';
import Task from './Task.js';

export default function({tasks}) {
    return (
            <div className='TaskList'>
                <ul>
                    {tasks.map((task) => <Task 
                                            key = {task.no}
                                            name = {task.name}/>
                        
                    )}
                </ul>
            </div>
    );
}