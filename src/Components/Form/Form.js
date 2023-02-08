import './Form.css'
import React from 'react'

export const Form = () => {
  return (
    <>
        <form className="Form_section">
            <ul>
                <li className="halflabel">
                    <label>Employee Name</label>
                    <input type="text" />
                </li>
                <li className="halflabel">
                    <label>Project Name</label>
                    <input type="text" />
                </li>
                <li className="halflabel">
                    <label>Employee Code</label>
                    <input type="text" />
                </li>
                <li className="halflabel">
                    <label>Reporting Manager</label>
                    <input type="text" />
                </li>
            </ul>
            <div className="form_padding">
                <a href="#" className="button_submit">Submit</a> 
            </div>
             

        </form>
    </>
  )
}
