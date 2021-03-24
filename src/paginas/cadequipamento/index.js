import React from 'react';
import Square from './square';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Login(){
   return (
     <>
     <h1>Cadastramento de equipamentos/Produtos</h1>
     <div className="formulario">
    <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Codigo:</label>
    <div className="p-col">
        <InputText value ={valor} id="firstname3" type="text"/>
    </div>
</div>
<div className="formulario">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Nome do produto ou equipamento:</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>
<div className="formulario">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Utilidade:</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>
<div className="formulario">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Validade se existir:</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>
  <div className="formulario">
  </div>
    <div className="botao">
    <Button label="Cadastrar"/>
    <Square valor = "alterar" onClik = {() =>setValor('')}/>
    <Button label="Alterar"/>
    <Button label="Limpar"/>
    <Button label="Excluir"/>
    </div>
  </>
  );
}
  