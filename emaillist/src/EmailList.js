import React from 'react';
import styles from './assets/scss/EmailList.scss';
import Email from './Email';

const EmailList = () => {
    return (
        <ul className={styles.Emaillist}>
            <Email />
            <Email />
            <Email />
            </ul>
    );
};

export default EmailList;