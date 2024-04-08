import React from 'react';

const NameList = () => {

    // JS code can go here

    // Variable
    const names = ["Simon Elbrink", "Mehrdad Javan", "Marcus Gudmundsen"];

    //Function 
    const getLastName = (name) => {
        let lastName = name.split(" ")[1];
        return lastName;
    }


    return (
        <div>
            <ul>
                {names.map((name, index) => {
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