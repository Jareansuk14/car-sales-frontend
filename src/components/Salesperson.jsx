// SalespersonTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const Salesperson = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/salesperson-cars-sold')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Cars Sold',
            dataIndex: 'CarsSold',
            key: 'CarsSold',
        },
    ];
    
    return (
        <div>
            <h2>2.6 จงแสดงชื่อและจํานวนรถที่ขายได้ ของพนักงานที่ขายรถได้ มากกว่าหรือเท่ากับ 2 คัน ใน เดือนสิงหาคม ปี พ.ศ. 2544</h2>
            <Table
                dataSource={data}
                columns={columns}
                rowKey="Name" 
            />
        </div>
    );
};

export default Salesperson;
