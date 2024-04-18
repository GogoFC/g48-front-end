import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// Functional component for Skill Component
const Skill = () => {

    // State to manage the list of skills
    const [skills, setSkills] = useState([]);

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

        // Destructuring values from the react-hook-form hook
        const { register, handleSubmit, formState: {errors}, reset} = useForm();

        const saveData = (data) => {
            // Generate a unique id for the new skill
            const id = "A" + Math.random().toString(36).substr(2, 6);

            // Create a new skill object
            const newEntry = { id: id, title: data.title };

            // Update the skills list with the new skill
            setSkills((previousSkills) => [...previousSkills, newEntry]);

            // Reset the form after submission
            reset();
        }

        // Form for Skill Entry
        return (
            <form className='container' onSubmit={handleSubmit(saveData)}>

                <div className='row'>

                    <div className='col'>
                        {/* Input field for the skill title */}
                        <input
                            type='text'
                            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                            placeholder='Enter a Skill Here'
                            {...register('title', {required: {value: true, message: "Required Field"}})}
                        />
                        {/* Display an error message if the title is required and not provided */}
                        {errors.title && (<span className="invalid-feedback">{errors.title.message}</span>)}
                    </div>

                    <div className='col'>
                        {/* Button to submit the form and add a new skill */}
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

// Export the SkillPractice component as the default export
export default Skill;