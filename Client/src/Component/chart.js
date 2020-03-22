import React from 'react'
import { Chart } from 'react-charts'


const MyChart = (props) => {

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1 ',
                data: fx()
            }
        ]
    )

    function fx() {
        let arr = []
        for (let i = 0; i < props.items.length; i++) {
            arr.push({ x: props.items[i].n, y: props.items[i].fn })
        }
        console.log(arr)
        return arr
    }

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )


    return (

        <div style={{
                width: '550px',
                height: '350px',
                "background-color": "lightblue"
            }}
        >
            <Chart 
            data={data} axes={axes} />

        </div>
    )
}

export default MyChart;


