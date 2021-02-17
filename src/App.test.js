import { render, screen, cleanup} from '@testing-library/react';
import App from './App';
import React from 'react'
import ReactDOM from 'react-dom'

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div= document.createElement('div');
    ReactDOM.render(<App/>, div);
})
