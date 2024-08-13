import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const All = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/all')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

const columns = [
    {
        title: 'Serial No',
        dataIndex: 'SerialNo',
        key: 'SerialNo',
    },
    {
        title: 'Brand',
        dataIndex: 'Brand',
        key: 'Brand',
    },
    {
        title: 'Model',
        dataIndex: 'Model',
        key: 'Model',
    },
    {
        title: 'Price',
        dataIndex: 'CarPrice',
        key: 'CarPrice',
        render: (price) => {
            const formattedPrice = typeof price === 'number' ? price.toLocaleString() : parseInt(price).toLocaleString();
            return `฿${formattedPrice}`;
        },
    },
    {
        title: 'Options Total Price',
        dataIndex: 'OptionsTotalPrice',
        key: 'OptionsTotalPrice',
        render: (price) => {
            const formattedPrice = typeof price === 'number' ? price.toLocaleString() : parseInt(price).toLocaleString();
            return `฿${formattedPrice}`;
        },
    },
    {
        title: 'Total Price',
        dataIndex: 'TotalPrice',
        key: 'TotalPrice',
        render: (price) => {
            const formattedPrice = typeof price === 'number' ? price.toLocaleString() : parseInt(price).toLocaleString();
            return `฿${formattedPrice}`;
        },
    },
];

    return (
        <div>
            <h2>2.8 จงแสดง SerialNo, Brand และ Model ของรถยนต์ พร้อมราคาของรถยนต์, ราคารวมของทุก Option ของรถคันนั้น และราคารวม (ราคารถ+ทุก option)</h2>
            <Table
                dataSource={data}
                columns={columns}
                rowKey="SerialNo" 
            />
        </div>
    );
};
export default All;
