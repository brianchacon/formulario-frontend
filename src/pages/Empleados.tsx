import Footer from "../components/Footer/Footer"
import TopMenu from "../components/TopMenu/TopMenu"

function Empleados() {
    return (
      <>
        <TopMenu/>
        <div className='container'>
          <div className="page-head-border">
            <h1>Empleados</h1>
          </div>
          <div className="page-head">
            <div className="page-head-top-data">             
              <div className="page-head-top-data-text">Empresa</div>
              <div className="page-head-top-data-text-value">CapacitIA</div>
            </div>
            <div className="page-head-action">
              <a href="/grupos">
                <button>Grupos</button>
              </a> 
              <button> + Crear </button>
            </div>
          </div>
          <div className="page-body">
            <div className="list-filter">
                <div className="list-filter-left">
                    <div className="buscar-text">Buscar</div>
                    <input className="buscar-input" type="text" />              
                </div>
                <div className="list-filter-right">
                    <div className="buscar-text">Grupos</div>
                    <select className="buscar-input" name="" id="">
                      <option value="Todos">TODOS</option>
                      <option value="Todos">TODOS</option>
                      <option value="Todos">TODOS</option>
                    </select>
                </div>
            </div>
            <div className="list-container">
              <div className="list-header">
                <div className="list-header-text">Lista de usuarios con empresa</div>
                <div className="list-header-text-value">CapacitIA</div>
              </div>
              <div className="list-elem">
                <div className="list-elem-content">

                </div>
                <div className="list-elem-action">
                      <button className="button-red">Expulsar</button>
                </div>
              </div>
              <div className="list-elem">
                <div className="list-elem-content">
                  <div></div>
                </div>
                <div className="list-elem-action">
                      <button className="button-green">Aceptar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>  
      </>
    )
  }
  export default Empleados