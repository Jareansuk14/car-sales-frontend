import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';

function CarList() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [activeButton, setActiveButton] = useState('economic'); 

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then(response => {
                setCars(response.data);
                setFilteredCars(response.data); 
            })
            .catch(error => {
                console.error('There was an error fetching the cars!', error);
            });
    }, []);

    const filterEconomicCars = () => {
        const filtered = cars.filter(car => car.Price <= 1000000);
        setFilteredCars(filtered);
        setActiveButton('economic');
    };

    const filterExpensiveCars = () => {
        const filtered = cars.filter(car => car.Price > 1000000);
        setFilteredCars(filtered);
        setActiveButton('expensive'); 
    };

    const filterLuxuriousCars = () => {
        const filtered = cars.filter(car => car.Price > 3000000);
        setFilteredCars(filtered);
        setActiveButton('luxurious');
    };

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
            title: 'Manufacturer',
            dataIndex: 'Manufacturer',
            key: 'Manufacturer',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
            render: (price) => {
                const formattedPrice = typeof price === 'number' ? price.toLocaleString() : parseInt(price).toLocaleString();
                return `฿${formattedPrice}`;
            },
        }

    ];

    return (
        <div>
            <h2>2.1 สร้าง Table CAR และ SALES (พร้อมกําหนด Primary Key และ Foreign Key ด้วย )</h2>
            <img height={800} width={1000} src="/img/2.1.png" alt="" />
            <h2>2.2 สร้าง <br />
                View EconomicCar <br />
                View ExpensiveCar <br />
                View LuxuriousCar
            </h2>
            <img height={500} width={500} src="/img/2.2.png" alt="" />
            <div style={{ marginBottom: 16 }}>
                <Button
                    type={activeButton === 'economic' ? 'primary' : 'default'}
                    onClick={filterEconomicCars}
                    style={activeButton === 'economic' ? {} : { borderColor: '#1890ff', color: '#1890ff' }}
                >
                    Economic Cars
                </Button>
                <Button
                    type={activeButton === 'expensive' ? 'primary' : 'default'}
                    onClick={filterExpensiveCars}
                    style={{ marginLeft: 8, ...(activeButton === 'expensive' ? {} : { borderColor: '#1890ff', color: '#1890ff' }) }}
                >
                    Expensive Cars
                </Button>
                <Button
                    type={activeButton === 'luxurious' ? 'primary' : 'default'}
                    onClick={filterLuxuriousCars}
                    style={{ marginLeft: 8, ...(activeButton === 'luxurious' ? {} : { borderColor: '#1890ff', color: '#1890ff' }) }}
                >
                    Luxurious Cars
                </Button>
            </div>
            <Table
                dataSource={filteredCars}
                columns={columns}
                rowKey="SerialNo"
                bordered
                pagination={{ pageSize: 10 }}
            />
            <h2>2.3 จงเขียน ตัวอย่างการ Update ข้อมูลของรถยนต์ ที่มี SerialNo เป็น 15220494 ผ่าน View ExpensiveCar ที่ขัดแย้งต่อข้อกําหนด WITH CASCADED CHECK OPTION</h2>
            <img height={600} width={1000} src="/img/2.3.png" alt="" />
            <h2>2.4 ยกตัวอย่างการ Insert ข้อมูลรถยนต์คันใหม่ผ่าน View EconomicCar</h2>
            <img height={400} width={1000} src="/img/2.4.png" alt="" />
        </div>
    );
}

export default CarList;
