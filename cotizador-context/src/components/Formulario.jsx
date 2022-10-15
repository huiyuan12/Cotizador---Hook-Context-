import React, { Fragment } from 'react'
import { MARCAS,years,PLANES} from '../constants'

import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
    const {handleChangeDatos, datos,error,setError,cotizarSeguro} = useCotizador();
    const handleSubmit= e =>{
            e.preventDefault();

            if(Object.values(datos).includes(""))
            {
                setError("Todos los campos son obligatorios")
                return;
            }
            setError("");
            cotizarSeguro();
    }
  return (
    <>
       {error && <Error></Error>}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label> 
                <select
                onChange={e=>handleChangeDatos(e)}
                name="marca"
                value={datos.marca}
                className='w-full p-3 bg-white border border-gray-200'>
                    <option value="">-- Selecciona marca --</option>

                   {MARCAS.map(element=>(
                    <option key={element.id}
                    value={element.id}>
                    {element.nombre}
                    </option>
                   ))}
                
                </select>  
                </div>  
                <div className='my-5'>
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label> 
                <select
                name="year"
                className='w-full p-3 bg-white border border-gray-200'
                onChange={e=>handleChangeDatos(e)}
                value={datos.year}>
                    <option value="">-- Selecciona Año --</option>

                   {years.map(element=>(
                    <option key={element}
                    value={element}>
                    {element}
                    </option>
                   ))}
                
                </select>  
                </div>

             
                <div className='my-5'>
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Elige un plan
                </label> 
                
                <div className="flex gap-3 items-center">
                    { PLANES.map(element=>(
                       <Fragment key={element.id}>
                            <label>
                                {element.nombre}
                            </label>
                            <input
                            type="radio"
                            onChange={e=>handleChangeDatos(e)}
                            name="plan"
                            value={element.id}></input>
                       </Fragment>
                       ))
                    }
                </div>
                </div>

                <input type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" 
                value="COTIZAR"/>
        </form>    
    </>
  )
}

export default Formulario