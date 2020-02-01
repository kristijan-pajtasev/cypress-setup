import React from 'react';
import {add} from './service';

function App() {
    return (
        <div>
            {add(2, 3)}
        </div>
    );
}

export default App;
