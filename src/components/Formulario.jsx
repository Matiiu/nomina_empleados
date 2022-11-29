import React, { useEffect, useState } from "react";
import '../css/formulario.css'; 

const Formulario = () => {

    const [numero, setnumero] = useState({
        dias: 0,
        salario: 0,
        aux: 3905
    });   
     const [total, setTotal] = useState('');  


    useEffect(() => {
       const {salario, dias, aux} = numero;           
        setTotal( (Number(salario) / 30 * Number(dias)) + (Number(aux) * Number(dias)) );
    },[numero]);

    const calcular = (event) => {
        const {name, value} = event.target;
        setnumero({...numero,[name]:value});
    };

    return (
        <div>
        <h1>Formulario</h1>  
            <fieldset>
                <legend>Nomina de empleado</legend>

                <label htmlFor="id">Ideficación:</label>
                <input type="text" name="id" id="id" required/>

                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" required/>

                <label htmlFor="salario">Salario:</label>
                <input 
                    type="number" 
                    name="salario" 
                    id="salario" 
                    value={numero.salario}
                    onChange={calcular}  
                    required
                />

                <label htmlFor="dias">Numero de días trabajados:</label>
                <input 
                    type="number" 
                    name="dias" 
                    id="dias"
                    value={numero.dias}
                    onChange={calcular} 
                    required
                />
                <label htmlFor="aux">Valor del día de axulio de transporte</label>
                  <input 
                    type="number" 
                    name="aux" 
                    id="aux"
                    value={numero.aux}   
                    onChange={calcular} 
                    readonly
                />

                <label htmlFor="n-dias">Total a pagar:</label>
                <input 
                    type="number" 
                    name="n-dias" 
                    id="n-dias" 
                    value={total}
                    disabled
                />
                 <p> (salario / Valor del día * días laborados) + (Valor del día de aux transporte * días laborados) = {new Intl.NumberFormat('es').format(total)}</p>            
                             
            </fieldset>           
        </div>  
    );  
};

export { Formulario };
