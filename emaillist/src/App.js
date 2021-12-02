import React from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import EmailList from './EmailList';

import './assets/scss/App.scss';


export default function() {
    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar />
          <EmailList />
        </div>
    )
}