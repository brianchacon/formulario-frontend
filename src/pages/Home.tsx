import React, { useEffect, useState } from 'react'
import TopMenu from '../components/TopMenu/TopMenu';
import WorkPlaceView from '../components/WorkPlaceView';
import Footer from '../components/Footer/Footer';

function Home() {
    const  [data, setData] = useState(1);

    return (
        <>
            <TopMenu/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'> Tester de datos</div>
                </div>
                
                {/* <WorkPlaceView/> */}
                
            </div>
            <Footer/>           
        </>

    )
}
export default Home