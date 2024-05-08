import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Main from './pages/Main';
import RoutesWithNotFound from './utilities/RoutesWithNotFound.utility';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import Login from './pages/Login';
import AuthGuard from './guards/auth.guard';
import Perfil from './pages/Perfil';
import Disponibles from './pages/Disponibles';
import Completadas from './pages/Completadas';
import Capacitaciones from './pages/Capacitaciones';
import Empleados from './pages/Empleados';
import Grupos from './pages/Grupos';
import Informes from './pages/Informes';

function App() {
  const [count, setCount] = useState(0);

  //creo que lo merjor es hacer unproprio guard con el session storage
  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>

          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.APP} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.APP}/*`} element={<Home />} />
            </Route>
            
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.MAIN} element={<Main />} />

            <Route path={PrivateRoutes.PROFILE} element={<Perfil />} />
            <Route path={PrivateRoutes.COMPLETADAS} element={<Completadas />} />
            <Route path={PrivateRoutes.DISPONIBLES} element={<Disponibles />} />
            <Route path={PrivateRoutes.CAPACITACIONES} element={<Capacitaciones />} />
            <Route path={PrivateRoutes.EMPLEADOS} element={<Empleados />} />
            <Route path={PrivateRoutes.GRUPOS} element={<Grupos />} />
            <Route path={PrivateRoutes.INFORMES} element={<Informes />} />
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>

    </div>
  )
}

export default App
