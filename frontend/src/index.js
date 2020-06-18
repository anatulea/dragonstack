import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation'
import Dragon from './components/Dragon'
render(
    <div>
        <h2>Dragon Stack From React</h2>
        <Dragon/>
        <Generation/>
    </div>,
    document.getElementById('root')
)
