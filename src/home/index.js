import React from "react";
import './stilo.css';

export default function Header(){
   return (
    <>
    <h1> Sistema de cadastro hospitalar</h1>
    <nav id="link">
        <ul>   
            <li><a href="/login">Login</a></li>
            <li><a href="/cadastro">Cadastro</a></li>

        </ul>
    </nav>
    </>
  );
}