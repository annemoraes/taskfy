import React from 'react';
import { Container, Label } from './style';

export default function Card(){
    return(
        <Container>
            <header>
                <Label color="#7159c1"/>
            </header>
            <p>Fazer migração de servidor</p>
            <img src="https://api.adorable.io/avatars/285/abott@adorable.png"></img>
        </Container>
    );
}