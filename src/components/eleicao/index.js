import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
 
 const Eleicao = () =>{
    const [apto, setApto] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [idade, setIdade] = useState(null);

    useEffect(()=>{
        setMensagem(null)
        setApto(null)
    },[idade])

    const verificacao = (e) => {
        e.preventDefault()
        if(idade>=16){
            setApto(true)
            setMensagem('Você está apto para votar')
            
        }else{
            setApto(false)
            setMensagem('Você não está apto para votar')
            
        }
    }


    return(
        <div>
            <fieldset>
                    <h1>Qual a sua idade?</h1>
                    <form onSubmit={verificacao}>
                        <input type="number" value={idade} placeholder='Digite sua idade' onChange={(event)=>{setIdade(event.target.value)}} />
                        <input type='submit'value='Verificar' />
                        <h2 id='resultado' className={apto ? styles.apto : styles.naoApto}>{mensagem}</h2>
                    </form>
            </fieldset>
        </div>
    );
    
}

export default Eleicao;