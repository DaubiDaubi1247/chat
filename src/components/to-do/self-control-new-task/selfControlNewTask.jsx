import { useState } from 'react';
import { Form, Field } from 'react-final-form'


const SelfControlNewTask = (props) => {
    const onSubmit = (e) => {
        props.setTask(e.first);
    }
    const validate = (e) => {
        const error = {};
        if (!(e.first?.length)) {
            error.first = "you have not entered a task"
        }
        return error
    }
    return (
            <Form onSubmit={onSubmit}
            validate={validate} 
            render={({handleSubmit,form}) => (
                <form action="" onSubmit={handleSubmit}> 
                {/* при отправке передает передает имя поля и его value в функцию onSubmit */}
                    <div>
                        <Field name="first" 
                        render={({input,meta}) => (
                            <div>
                                <textarea {...input}/>   
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                            )}
                        />
                    </div>
                    <button type="submit">add Task</button>
                    <button type="button" onClick={form.reset}>reset form</button>

                </form>
            )
            }
        />)
}

export default SelfControlNewTask