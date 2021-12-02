import React, {useState} from 'react';
import styles from './assets/scss/SearchBar.scss';
const SearchBar = ({callback}) => {
    const [keyword, setKeyword] = useState('');
    const onInputChange = (e) => {
        callback(e.target.value);
        setKeyword(e.target.value);
    }
    return (
            <div className={styles.Searchbar}>
                찾기: <input type='text' placeholder='search' value={keyword} onChange={(e) => {callback(e.target.value) ;setKeyword(e.target.value)}} />
            </div>
    );
};

export default SearchBar;