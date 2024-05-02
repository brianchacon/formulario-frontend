import { useState,useEffect } from "react";
import {registrosPorUrl} from "../services/auth.service.js";
import toast, { Toaster } from 'react-hot-toast';

function WorkPlaceView() {

    let [isLoading, setIsLoading] = useState(true);
    let [products, setProducts]:any = useState([]);

    const productsByUserRequest = async () =>{
        try{
           // let url = "http://wonderhamburgueseria.com.ar/alta-gracia/pedidos/server//pedidos/getAll.php";
            let url = 'http://www.riosegundo.wonderhamburgueseria.com.ar/server//mostrador/getAll.php';
           // let url = 'http://wonderhamburgueseria.com.ar/nuevacordoba/pedidos/server//mostrador/getAll.php';
          //Trae los ultimos 25, si los rangos son null
          const result:any = await registrosPorUrl(url,{"initDate":"2023-11-16T06:00:00.985Z","endDate":"2023-11-17T06:00:00.985Z"});

          console.log(result.dataArray);
          
          setProducts(result.dataArray);
          console.log('Post seteo');
          setIsLoading(false);
        } catch (error){
          console.log(error);
          toast.error( "Problemas al obtener los productos:"+JSON.stringify(error));
        }
    };

    function getSumArticles(articlesStr:any){
        let sum = 0;

        try{
            let list = JSON.parse(articlesStr);
            if(list.length >0){
                list.forEach((element:any) => {
    
                    sum += element.cantidad * element.precio;
                });
            } 
        }catch(error){
            console.log(error);
            toast.error( "Problemas al parsear (Probablemente muy largo):"+JSON.stringify(error));
        }



        return sum;
    }

    function itemSumValid(register:any){
        let descuento = parseInt(register.DESCUENTO);
        let amount = parseInt(register.AMOUNT);
        
        let sumArticles =  getSumArticles(register.ARTICULOS);
        if(!(amount + descuento == sumArticles)){

            console.log('sumas-> amount:'+amount+' descuento:'+descuento+' sumArticles:'+sumArticles +'='+(amount + descuento == sumArticles));

            toast.error( 'sumas-> amount:'+amount+' descuento:'+descuento+' sumArticles:'+sumArticles +'='+(amount + descuento == sumArticles));
        }
        //return (amount  == sumArticles -descuento);
        return (amount + descuento == sumArticles);
    }

    function getAmount(list:any){
        
        let idList = "";
        let countInvalidElement = 0;
        list.forEach((register:any) => {

            if(!itemSumValid(register)){
                countInvalidElement++;
                idList +=  register.ID+ ", ";
            }
        });
        let result = "Invalidos: "+countInvalidElement+" lista de ids: "+idList;
        return result;
    }
    
    let loadingFunction = (() => {
        if (isLoading)
            return <div className='spinner'/>;
        else{
            if(products ){
                return <>
                    <div className="card"><h3>{getAmount(products)}</h3></div>
                    <table style={{'width':'100%'}}>
                        <tr>
                            <th>ID</th>
                            <th>CREATION_DATE</th>
                            <th>AMOUNT</th>
                            <th>DESCUENTO</th>
                            <th>suma Arts</th>
                            <th>arts</th>
                        </tr>
                        
                        { products.map((item:any) => (
                        <tr key={item.ID} className="fake-table-row" role="button" style={{'cursor':'default'}}>
                            <td className="fake-table-cell fake-table-cell-first" style={{'width':'26px','backgroundColor':'#136835'}}>{item.ID}</td>
                            <td className="fake-table-cell fake-table-cell-first" style={{'width':'26px','backgroundColor':'#136835'}}>{item.CREATION_DATE}</td>
                            <td className="fake-table-cell fake-table-cell-first" style={{'width':'26px','backgroundColor':'#136835'}}>{item.AMOUNT}</td>
                            <td className="fake-table-cell fake-table-cell-first" style={{'width':'26px','backgroundColor':'#136835'}}>{item.DESCUENTO}</td>
                            <td className="fake-table-cell fake-table-cell-first" style={{'width':'26px','backgroundColor':itemSumValid(item) ? '#136835':'#681313'}}>{getSumArticles(item.ARTICULOS)}</td>
                            <td className="fake-table-cell fake-table-cell-first" style={{'width':'26px','backgroundColor': '#136835'}}>{itemSumValid(item)? '___' :item.ARTICULOS}</td>
                        </tr>
                    ))}</table>
                </>;
            } else {
                return <>Sin datos</>;
            }
        }
    });



    useEffect(() => {
        productsByUserRequest();
    }, []);

    return (
        <div className='row card'>
            <div>
                <div>
                    <h3>WorkPlaceView</h3>
                    {loadingFunction()}
                </div>
            </div>
            <Toaster />       
        </div>
    )
}
export default WorkPlaceView