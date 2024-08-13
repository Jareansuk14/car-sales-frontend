import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const CarsWithOptions = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/cars-with-options');
                setCars(response.data);
            } catch (error) {
                message.error('Failed to fetch car data');
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: 'Serial No',
            dataIndex: 'SerialNo',
            key: 'serialNo',
        },
        {
            title: 'Brand',
            dataIndex: 'Brand',
            key: 'brand',
        },
        {
            title: 'Model',
            dataIndex: 'Model',
            key: 'model',
        },
        {
            title: 'Options',
            dataIndex: 'Options',
            key: 'options',
            render: (text) => text.split(',').join(', '), 
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'price',
            render: (price) => {
                const formattedPrice = typeof price === 'number' ? price.toLocaleString() : parseInt(price).toLocaleString();
                return `฿${formattedPrice}`;
            },
        },

    ];

    return (
        <div>
            <h2>2.5 จงแสดง Brand และ Model ของรถยนต์ ทีมี Option 'Air Bag' และ 'CD Player'</h2>
            <Table
                dataSource={cars}
                columns={columns}
                loading={loading}
                rowKey="SerialNo"
                bordered
            />
        </div>
    );
};

export default CarsWithOptions;
