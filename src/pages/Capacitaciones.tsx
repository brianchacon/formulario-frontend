import Footer from "../components/Footer/Footer"
import TopMenu from "../components/TopMenu/TopMenu"

function Capacitaciones() {
    return (
      <>
        <TopMenu/>
        <div className='container'>
          <div className="page-head-border">
          Capacitaciones
          </div>
          <div className="page-head">

          </div>
          <div className="page-body">
            <div className="list-filter">

            </div>
            <div className="list-container">
              <div className="list-header">
                <div className="list-header-text"></div>
                <div className="list-header-text-value"></div>
              </div>
              <div className="list-elem">
                <div className="list-elem-content">

                </div>
                <div className="list-elem-action">
                      <button>Aceptar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>  
      </>
    )
  }
  export default Capacitaciones