import useCotizador from "../hooks/useCotizador";
import React from 'react'
import { MARCAS , PLANES} from "../constants";
import { useCallback ,useMemo ,useRef} from "react";
const Resultado = () => {
    const {resultado,datos} = useCotizador();

    const {marca,plan,year} = datos;

    const yearRef=useRef(year);

    const [nombreMarca] = useCallback(MARCAS.filter(element=> element.id === Number(marca)),[resultado])
    const [nombrePlan] = useCallback(PLANES.filter(element=> element.id === Number(plan)),[resultado])


    if(resultado ===0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">
            Resumen
        </h2>

        <p className="my-2"> 
        Marca: 
            <span className="font-bold">
            {nombreMarca.nombre}
            </span>
        </p>

        <p className="my-2"> 
        Plan: 
            <span className="font-bold">
            {nombrePlan.nombre}
            </span>
        </p>

        <p className="my-2"> 
        Año:  
            <span className="font-bold">
             {yearRef.current}
            </span>
        </p>
        <p className="my-2"> 
        Total cotización: 
            <span className="font-bold">
            {resultado}
            </span>
        </p>

    </div>
  )
}

export default Resultado