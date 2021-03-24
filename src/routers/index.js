import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';
import CadEquipamento from '../paginas/cadequipamento';

export default function Routes(){
  return(
   
   <Switch>
   <Route exact path ='/login' component={Login} />
   <Route exact path ='/cadastro' component={Cadastro} />
   <Route exact path ='/cadequipamento' component={CadEquipamento} />
   </Switch>
   

  );
}
