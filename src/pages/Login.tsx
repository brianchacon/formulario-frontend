import { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../models/roles';
import { PrivateRoutes, PublicRoutes} from '../models/routes';

import { clearLocalStorage,persistLocalStorage } from '../utilities/localStorage.utility';
import { request } from "../services/auth.service";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  let [showLogin, setShowLogin] = useState(true);
  let [isLoading, setIsLoading] = useState(false);

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [lastname, setLastname] = useState("");

  
  function cambiarVista() {
    setShowLogin(!showLogin);
  }

  function cambioUserName(e:any) { setUserName(e.target.value) }
  function cambioPass(e:any) { setPassword(e.target.value) }
  function cambioName(e:any) { setName(e.target.value) }
  function cambioLastname(e:any) { setLastname(e.target.value) }


  //request
    const authenticate = async () =>{
        setIsLoading(true);
        try{
        let url = '/api/v1/auth/authenticate';
    
        //Trae los ultimos 25, si los rangos son null
        const result:any = await request(url,{"email":userName,"password":password});

        console.log(result.dataArray);
        persistLocalStorage("accessToken",result.accessToken);
	    persistLocalStorage("refreshToken",result.refreshToken);
        persistLocalStorage("id",result.id);
        persistLocalStorage("name",result.name);
        persistLocalStorage("role",result.role);
        
        console.log('Repost login');
        setIsLoading(false);
        navigate(`/${PrivateRoutes.APP}`, { replace: true });
        } catch (error){
        console.log(error);
        setIsLoading(false);
        toast.error( "Problemas al obtener los productos:"+JSON.stringify(error));
        }
    };
    const register = async () =>{
        setIsLoading(true);
   
        try{
        let url = '/api/v1/auth/register';        
    
        //Trae los ultimos 25, si los rangos son null
        const result:any = await request(url,{"name":name,"lastname":lastname,"email":userName,"password":password,"role":Roles.USER});

        console.log(result.dataArray);
        persistLocalStorage("accessToken",result.accessToken);
	    persistLocalStorage("refreshToken",result.refreshToken);
        persistLocalStorage("id",result.id);
        persistLocalStorage("name",result.name);
        persistLocalStorage("role",result.role);
        
        console.log('Response register');
        setIsLoading(false);
        } catch (error){
        console.log(error);
        setIsLoading(false);
        toast.error( "Problemas al obtener los productos:"+JSON.stringify(error));
        }
    };
  
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

    let loadingFunction = (() => {
        if (isLoading){
            return <div className='spinner'/>;
        } else {
            if (showLogin){
                return     <div className="card-body">
                <h2> LOGIN </h2>
                <form action="" method="post">
                  <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" placeholder="name@example.com"
                      value={userName} onChange={cambioUserName}
                      />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input type="password" className="form-control" placeholder="Contraseña"
                      value={password} onChange={cambioPass}
                      />
                  </div>
                </form>
                <button className="btn btn-success" onClick={authenticate}>Acceder</button>
              </div>;
            } else {
                return <div className="card-body">
                <h2> Crear cuenta</h2>
                <form action="" method="post">
                  <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" placeholder="name@example.com"
                      value={userName} onChange={cambioUserName}
                      />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input type="password" className="form-control" placeholder="Contraseña"
                      value={password} onChange={cambioPass}
                      />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <input type="text" className="form-control" placeholder="Nombre"
                      value={name} onChange={cambioName}
                      />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Apellido</label>
                      <input type="text" className="form-control" placeholder="Apellido"
                      value={lastname} onChange={cambioLastname}
                      />
                  </div>
                </form>
                <button className="btn btn-success" onClick={register}>Crear</button>
              </div>;
            }
        }
    });
  
  
  return (

        <div className='row card'>
            <div>
                <div>
                    <h3>Acceso</h3>
                    {loadingFunction()}
                    <div className="card-footer">
                        <button onClick={cambiarVista}>Cambiar vista</button>
                    </div>
                </div>
            </div>
            <Toaster />       
        </div>
  );
}
export default Login;
