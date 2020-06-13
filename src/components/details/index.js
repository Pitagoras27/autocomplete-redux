import React from 'react';

import Page from './page'
import './styles.css';

const Details = props => {
    const {
        currentPage,
        currentItem,
    } = props;
    return (
        <Page
            currentPage={currentPage}
            currentItem={currentItem}
        />
    );
}

export default Details;