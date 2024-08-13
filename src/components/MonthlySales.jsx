// MonthlySalesTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const MonthlySales = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/monthly-sales')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    
const columns = [
    {
        title: 'Month',
        dataIndex: 'Month',
        key: 'Month',
    },
    {
        title: 'Year',
        dataIndex: 'Year',
        key: 'Year',
    },
    {
        title: 'Cars Sold',
        dataIndex: 'CarsSold',
        key: 'CarsSold',
    },
    {
        title: 'Total Sales',
        dataIndex: 'TotalSales',
        key: 'TotalSales',
        render: (price) => {
            const formattedPrice = typeof price === 'number' ? price.toLocaleString() : parseInt(price).toLocaleString();
            return `฿${formattedPrice}`;
        },
    },
];

    return (
        <div>
            <h2>2.7 จงแสดงข้อมูลยอดการขายรถ ในแต่ละเดือน โดยให้แสดง เดือน, ปี, จํานวนรถและยอดรวมราคาของรถที่ขายได้ ให้เรียงลําดับตามจํานวนรถ</h2>
            <Table
                dataSource={data}
                columns={columns}
                rowKey="Month-Year" 
            />
        </div>
    );
};

export default MonthlySales;
