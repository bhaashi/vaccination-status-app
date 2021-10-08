import React,{useEffect,useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector} from "react-redux";

const ViewCityChart = () =>{
  const [chartData, setChartData]  = useState({});
  const cities = useSelector((state) => state.cityLists);

  const CityChart = () => {
        let cityLabels = [];
        let populations = [];
        let vaccinatedCounts = [];
        let noOfDoses = [];
        cities.forEach(city => {
        cityLabels.push(city.name);
        populations.push(city.population);
        vaccinatedCounts.push(city.vaccinated);
        noOfDoses.push(city.dosesAvailable);

        });
        setChartData({
            labels: cityLabels,
            datasets: [{
                          label: 'Population',
                          data: populations,
                          backgroundColor: "rgba(255,99,132,0.2)",
                          borderColor: "rgba(255,99,132,1)",
                          borderWidth: 1,
                        },
                        {
                          label: 'Vaccinated',
                          data: vaccinatedCounts,
                          backgroundColor: "rgba(155,231,91,0.2)",
                          borderColor: "rgba(255,99,132,1)",
                          borderWidth: 1,
                        },
                        {
                          label: 'Doses Available',
                          data: noOfDoses,
                          backgroundColor: "rgba(54, 162, 235, 0.6)",
                          borderColor: "rgba(255,99,132,1)",
                          borderWidth: 1,
                        },
                      ]
        });
}

    
  useEffect(() => {
    CityChart();
  }, []);

    return(
        <Bar
        data={chartData}
        width={400}
        height={350}
        options={{maintainAspectRatio: false}}
      />
    )

}

export default ViewCityChart;