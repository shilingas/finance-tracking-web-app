import React, { Component, useState } from 'react';
export const Counter = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    const getData = async () => {

        const resp = await fetch(`./output.json`);
        const tempData = await resp.json();
        setData(tempData);
        setStatus(true);
    }
    return (
        <div className='container'>
            <h1>Getting data: </h1>
            <button onClick={getData}>test</button>
            <button onClick={() => setData([])}>clear data</button>
            <div className='data'>
                {
                    status ? (
                        data.map((item) => {
                            const { login, id } = item;
                            return (
                                <div>
                                    <h1>{login} </h1>
                                    <h1>{id}</h1>
                                </div>
                            );
                        })) : (
                        <h1>empty data...</h1>
                    )
                }
            </div>
        </div>
    );
}