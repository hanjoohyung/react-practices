import React from 'react';
import CardList from './CardList.js';
import cards from './assets/json/data.json';
import './assets/css/style.css';

export default function() {
    return (
        <div className='KanbanBoard'>
            <CardList key='ToDo' title={'ToDo'} cards={ cards.filter((card) => card.status === 'ToDo') }/>
            <CardList key='Doing' title={'Doing'} cards={ cards.filter((card) => card.status === 'Doing') }/>
            <CardList key='Done' title={'Done'} cards={cards.filter((card) => card.status === 'Done') }/>
        </div>
    )
}