import logo from './logo.svg';
import './App.css';
import './Counter.tsx';
import React, {useState, useCallback, useEffect} from 'react';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

function App() {
    const [ count, setCount ] = useState( 0 );

    const onClickPlus = useCallback( () => {
        setCount( count + 1 ); 
    }, [ count ]);
    
    const onClickMinus = useCallback( () => {
        setCount( count - 1 ); 
    }, [ count ]);
    const disabledtf = useCallback( () => {
     
    })
  
    return (
        <div className="big">
          <div className="countt">
            <p className="count">{ count }</p>
          </div>
          <div className="ppmm" >
             <button id="target_btn" className="minus-button" onClick={onClickMinus}>-</button>
            <button id="target_btn" className="plus-button"  onClick={onClickPlus}>+</button>

          </div>     
          <div>
            <button className="onoff" onClick={disabledtf() }>on/off</button>
            </div>     
    
        </div>
    );
}

export default App;