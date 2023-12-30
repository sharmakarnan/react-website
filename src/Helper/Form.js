import React from 'react';
import "../styles/Form.css";

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'/>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form