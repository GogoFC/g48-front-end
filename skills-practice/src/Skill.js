import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Skill = () => {

    const initialState = [
        { id: 1, title: "Java" }, { id: 2, title: "C#" }, { id: 3, title: "JavaScript" }]

    const [skills, setSkills] = useState(initialState);





    // Nested functional component to display Skills
    const ShowData = ({ skills }) => {
        return (
            <div className='container'>
                <ul>
                    {
                        skills.map((skill) => {
                            const li =
                                <li key={skill.id}>{skill.title}</li>
                            return li;
                        })
                    }
                </ul>
            </div>

        );
    };


    // Nested functional component, Form to add Skill.
    const Form = () => {

        const { register, handleSubmit } = useForm();


        const saveData = (data) => {

            const id = "A" + Math.random().toString(36).substr(2, 6);

            const newEntry = { id: id, title: data.title };

            setSkills((previousSkills) => [...previousSkills, newEntry]);

        }


        return (

            <form className='container' onSubmit={handleSubmit(saveData)}>

                <div className='row'>

                    <div className='col'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter a Skill Here'
                            {...register('title')}
                        />
                    </div>

                    <div className='col'>
                        <button
                            type='submit'
                            className='btn btn-success'
                        >+</button>
                    </div>
                </div> 


            </form>

        );
    };





    // Main render function of the Skill Component
    return (
        <div className='container'>

            <h1>Skills Practice</h1>

            <ShowData skills={skills} />

            <Form />
        </div>
    );
};

export default Skill;