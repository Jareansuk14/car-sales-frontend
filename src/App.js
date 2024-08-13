import React from 'react';
import CarList from './components/CarList';
import CarsWithOptions from './components/CarsWithOptions';
import Salesperson from './components/Salesperson';
import MonthlySales from './components/MonthlySales';
import All from './components/All';
import 'antd/dist/reset.css';

function App() {
    return (
        <div className="App" style={{ marginTop: '10px', padding: '20px' }}>
            <CarList />
            <CarsWithOptions />
            <Salesperson />
            <MonthlySales />
            <All />
        </div>
    );
}

export default App;
