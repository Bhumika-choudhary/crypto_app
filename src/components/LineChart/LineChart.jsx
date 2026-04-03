import { useEffect, useState } from 'react'
import Chart from 'react-google-charts'


export default function LineChart({historicalData}) {
    const [data , setData] = useState([["Date", "Prices"]])
    useEffect(()=>{
     let dataCopy = [["Date","Prices"]];
     if (historicalData && historicalData.prices){
        historicalData.prices.forEach((item)=>{
            const date = new Date(item[0]);
            const formattedDate = date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
            });
            dataCopy.push([formattedDate, item[1]]);
        });
        setData(dataCopy);
     }
    },[historicalData])
  return (
    <div>
      <Chart 
      chartType='LineChart'
      data={data}
      height="300px"
      width="100%"
      options={{
        title: 'Price History',
        titleTextStyle: { color: '#ffffff', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: { textStyle: { color: '#ffffff' } },
        hAxis: { 
          textStyle: { color: '#ffffff' },
          titleTextStyle: { color: '#ffffff' }
        },
        vAxis: { 
          textStyle: { color: '#ffffff' },
          titleTextStyle: { color: '#ffffff' },
          format: 'currency'
        },
        colors: ['#7927ff'],
        curveType: 'function',
        pointSize: 4,
        pointColor: '#ff27b8',
        lineWidth: 3,
        chartArea: { 
          width: '85%', 
          height: '70%',
          backgroundColor: 'transparent'
        }
      }}
      legendToggle={false}
    />
    </div>
  )
}
