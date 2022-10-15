import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, obtenerDiferenciaYear, formatearDinero} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) =>
{
    const [datos,setDatos] = useState({
        marca:"",
        year:"",
        plan:""
    });
    const [error,setError] = useState("")
    const handleChangeDatos=e=>{
       setDatos( { ...datos, [e.target.name] : e.target.value } )
    }
    const [resultado,setResultado] = useState(0);
    const [cargando,setCargando] = useState(false);

    const cotizarSeguro =()=>{
       //Base que nos da el cliente
        let resultado = 2000;

        //Diferencia de años al actual
       const diferencia = obtenerDiferenciaYear(datos.year);
    
        //Por cada año de diferencia el precio baja un 3%
        resultado -= ((diferencia * 3)*resultado)/100;

        //Americano 15%
        //Europeo 30%
        //Asiatico 5%

        resultado *= calcularMarca(datos.marca);

        resultado *= calcularPlan(datos.plan);
        console.log(datos.plan);
        console.log(resultado)
        resultado = formatearDinero(resultado);
        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            setResultado(resultado);
        }, (3000));
      
    }
    return(
        <CotizadorContext.Provider value={{
            handleChangeDatos,
            datos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}
export {
    CotizadorProvider
}

export default CotizadorContext;























