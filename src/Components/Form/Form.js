import'./Form.css'
import React from 'react'

export const Form = () => {
  return (
    <>
        <form className="Form_section">
            <h1>Form</h1>
                    <label for="fname" className='heads'>Employee Name</label>
                    <input type="text" id="fname" className='input_feild'/>
              
                    <label for="pname" className='heads'>Project Name</label>
                    <input type="text" id="pname" className='input_feild'/>
              
                    <label for="Ecode" className='heads'>Employee Code</label>
                    <input type="text" id="Ecode" className='input_feild'/>
              
                    <label for="Rmanager" className='heads'>Reporting Manager</label>
                    <input type="text" id="Rmanager" className='input_feild'/>
            <div className="form_padding">
                <a href="#" className="button_submit">Submit</a> 
            </div>
             

        </form>
    </>
  )
}
