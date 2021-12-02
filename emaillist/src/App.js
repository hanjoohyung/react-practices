import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import EmailList from './EmailList';

import './assets/scss/App.scss';
import data from './assets/json/data.json';


export default function() {
    const [Keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (Keyword) => {
        console.log(Keyword);
        setKeyword(Keyword);
    }

    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar callback={notifyKeywordChanged} />
          <EmailList Keyword={Keyword} emails={data} />
        </div>
    )
}