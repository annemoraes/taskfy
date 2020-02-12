import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Container } from './style';

export default function List(){
    return(
        <Container>
            <header>
                <h2>Tasks</h2>
                <button type="button">
                    <MdAdd size={24} color="#FFF"/>
                </button>
            </header>
        </Container>
    );
}