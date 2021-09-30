import React from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector} from "react-redux";

const ViewCityChart = () =>{
    const cities = useSelector((state) => state.cities);
    
    const dataBar = {
    
    };

    return(
        <Bar
        data={dataBar}
        width={400}
        height={350}
        options={{maintainAspectRatio: false}}
      />
    )

}

export default ViewCityChart;