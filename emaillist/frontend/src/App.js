import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import EmailList from './EmailList';

import './assets/scss/App.scss';
import data from './assets/json/data.json';


export default function() {
    const [keyword, setkeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
        console.log(keyword);
        setkeyword(keyword);
    }

    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
          <EmailList keyword={keyword} emails={data} />
        </div>
    )
}