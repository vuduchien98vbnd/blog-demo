import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS,
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
} from "chart.js";

import './statisticPage.css'
import BlogAdminService from "../../../common/api/blogAdminService";


ChartJS.register(
    BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
)
const BlogStatistical = () =>{
   const [labels,setLabels] = useState([])
   const [data, setData] = useState([])
    const fetchStatistic = () =>{
        BlogAdminService.getStatistic()
        .then(response =>{
            const data = response.data.data
            const labels = response.data.labels
            setData(data)
            setLabels(labels)
            
        })
        .catch(error =>{
            console.log(error);
        })
    };
    useEffect(()=>{
       
        fetchStatistic()

    },[])
    const dataStatistic = {
        labels: labels,
        datasets: [
            {
                label: 'Số lượt xem',
                data:data,
                backgroundColor: 'skyblue',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const options = {}
    return(
        <div>
            <h1>Thống kê</h1>
            <div className="statistical-container">
                <div className="statistical-bar">
                    <Bar 
                        data={dataStatistic}
                        options={options}  
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogStatistical