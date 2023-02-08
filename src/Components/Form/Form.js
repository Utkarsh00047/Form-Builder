import './Form.css';
import { useState } from 'react';
import React from 'react'
import ModalBox from '../ModalBox/ModalBox';

export const Form = () => {
    const [openModalBox, setOpenModalBox] = useState(false);
    const setModalBox = () => {
    setOpenModalBox(!openModalBox);
  };
  return (
    <>
        <form className="Form_section">
            <h1>Form</h1>
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
          <button onClick={setModalBox}>Modal Box</button>
          {openModalBox && <ModalBox />}
    </>
  )
}
