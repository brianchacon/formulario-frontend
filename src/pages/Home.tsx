import React, { useEffect, useState } from 'react'
import TopMenu from '../components/TopMenu';
import WorkPlaceView from '../components/WorkPlaceView';
import BottomMenu from '../components/BottomMenu';

function Home() {
    const  [data, setData] = useState(1);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'> Tester de datos</div>
            </div>
            <TopMenu/>
            <WorkPlaceView/>
            <BottomMenu/>           
        </div>
    )
}
export default Home