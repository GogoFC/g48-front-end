import React from 'react';

const NameList = (props) => {

    // JS code can go here

    //Function 
    const getLastName = (name) => {
        let lastName = name.split(" ")[1];
        return lastName;
    }


    return (
        <div>
            <ul>
                {props.names.map((name, index) => {
                    const liElement =
                        <li key={index}> 
                            <span className='text-info'>
                            {name} - {getLastName(name)} - {getLastName(name).toUpperCase()}
                            </span>

                        </li>;
                    return liElement;
                })}

            </ul>
        </div>
    );
};

export default NameList;