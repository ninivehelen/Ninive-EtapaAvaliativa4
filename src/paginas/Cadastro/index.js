import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
 
export default function Cadastro(){
     return (
     <>
     <h1>Faça o Cadastro</h1>
     <div className="formulario">
    <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Nome:</label>
    <div className="p-col">
        <InputText id="firstname3" type="text"/>
    </div>
</div>
<div className="formulario">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Digite uma senha:</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>
<div className="formulario">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Codigo do Funcionario:</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>
  <div className="formulario">
  </div>
    <div className="botao">
     <a href="/cadequipamento">
    <Button label="Cadastrar"/>
    </a>
    </div>
  </>
  );
}
  