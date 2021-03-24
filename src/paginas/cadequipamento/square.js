import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';

function Square(props){

  return(
    <div>
      <Button label = {props.valor}/>
    </div>

  );

}
export default Square;