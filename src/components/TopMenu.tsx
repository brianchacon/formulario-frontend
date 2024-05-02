function TopMenu() {
  return (
    <div className='row card'>
        <div className='col-12'>
            <div className='menu-row-container'>
              <button className="btn-menu">Nuevo</button>  
              <button className="btn-menu">Cargar</button>  
              <button className="btn-menu">Guardar</button>  
            </div>
        </div>   
        <div className='col-12'>
            <div className='menu-row-container'>
              <button className="btn-menu">Texto</button>  
              <button className="btn-menu">Css</button>  
            </div>
        </div>   
    </div>
  )
}
export default TopMenu