import React, { useState, useEffect } from 'react';

const HooksDemo = () => {

    const [date, setDate] = useState("-");
    const [reloadData, setReloadData] = useState(false);

    // useEffect (()=> {} , [ ]); -- Callback and Dependency
    useEffect(() => {

        console.log("useEffect triggered")
        const currentDate = new Date();
        setDate(currentDate.toLocaleString('sv-SE'))


    }, [reloadData]);


    const updateDateHandler = () =>{
        console.log("button Clicked!")
        setReloadData(!reloadData);

    };




    return (
        <div className='container mt-5'>
            <h3>Hooks Demo</h3>
            <div className='alert alert-info'>
                {date}
            </div>

            <div className='row'>
                <div className='col'>
                    <button className='btn btn-info'
                    onClick={updateDateHandler}>Update Date</button>
                </div>
            </div>

            
        </div>
    );
};

export default HooksDemo;