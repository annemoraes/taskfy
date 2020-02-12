import React from 'react';
import List from '../List';
import { loadLists } from '../../services/api';
import { Container } from './style';

const lists = loadLists();

export default function Board(){
    return(
        <Container>
            {lists.map(list => <List key={list.title} data={list}/>)}
        </Container>
    );
}
