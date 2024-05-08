import './TopMenu.css';
import { useState,useEffect } from "react";

function TopMenu() {
  let [showModal, setShowModal] = useState(false);
  
  function toggleModal(){
    setShowModal(!showModal);
    if(showModal){
      document.getElementById("float-menu-options")?.classList.add("hide")
    } else {
      document.getElementById("float-menu-options")?.classList.remove("hide")
    }
  }

  return (
    <>
      <div className='menu-container'>
        <div className="left-section">
          <a href='#'>
            <div className="logo" style={{"display":"flex"}}>
              <img className="logo-img" src="/logo.png" alt="logo empresa" />
              <img  className="logo-name" src="/logo-name.png" alt="CapacitIA" />
            </div>
          </a>
        </div>
        <div className="mid-section">
            <div className='menu-display-center'>
                <button className="btn-menu" onClick={toggleModal}>
                  <span>
                  Menu
                  </span> 
                  <svg className='btn-menu-' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                  </svg>
                </button>  
            </div>
        </div>
        <div className="right-section">
          <div className="profile-button">
              <a href="/perfil" className="btn-menu">Perfil</a>
          </div>
        </div>

      </div>
      <div className="float-menu hide" id="float-menu-options"> 
        <div className="float-menu-body">
          <div className="float-menu-body-item">
            <a href="/disponibles" className="btn-menu">Capacitaciones disponibles</a>
          </div>
          <div className="float-menu-body-item">
            <a href="/completadas" className="btn-menu">Capacitaciones completadas</a>
          </div>
          <div className="float-menu-body-item">
            <a href="/capacitaciones" className="btn-menu">Capacitaciones</a>
          </div>
          <div className="float-menu-body-item">
            <a href="/empleados" className="btn-menu">Empleados</a>
          </div>
          <div className="float-menu-body-item">
            <a href="/empleados" className="btn-menu">Informes</a>
          </div>

          <div className="float-menu-body-item">
            <a href="/grupos" className="btn-menu">Grupos</a>
          </div>
          <div className="float-menu-body-item">
              <a href="/perfil" className="btn-menu">Perfil</a>
          </div>
        </div>
        <div className="float-menu-footer" onClick={toggleModal}>
          <div className="float-menu-footer-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
          </div>
          <div className="float-menu-footer-item">OCULTAR</div>
          <div className="float-menu-footer-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
export default TopMenu