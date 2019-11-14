import React from 'react';
import './ToDo.css';
import Checkbox from './components/Checkbox';
import ListItem from './components/ListItem';

function ToDo(){
    return (
        <div>
            <Checkbox /><ListItem />
            <Checkbox /><ListItem />
            <Checkbox /><ListItem />
            <Checkbox /><ListItem />
        </div>
    );
}

export default ToDo;