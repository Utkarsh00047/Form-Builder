import './Form.css'
import React from 'react'

export const Form = () => {
  return (
    <>
        <form className="Form_section">
            <h1>Form</h1>
            <ul>
              
                    <label for="fname">Employee Name</label>
                    <input type="text" id="fname"/>
              
                    <label for="pname">Project Name</label>
                    <input type="text" id="pname"/>
              
                    <label for="Ecode">Employee Code</label>
                    <input type="text" id="Ecode" />
              
                    <label for="Rmanager">Reporting Manager</label>
                    <input type="text" id="Rmanager"/>
            </ul>
            <div className="form_padding">
                <a href="#" className="button_submit">Submit</a> 
            </div>
             

        </form>
    </>
  )
}
