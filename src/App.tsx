import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import RoutesWithNotFound from './utilities/RoutesWithNotFound.utility';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import Login from './pages/Login';
import AuthGuard from './guards/auth.guard';

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
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>

    </div>
  )
}

export default App
