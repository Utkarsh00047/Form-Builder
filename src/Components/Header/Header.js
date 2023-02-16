import React, {useState} from 'react'
import Preveiw from '../Preveiw/Preveiw';
import './Header.css';

export const Header = () => {

  const [openPreveiw, setOpenPreveiw] = useState(false);
  const setPreveiw = () => {
    setOpenPreveiw(!openPreveiw);
  };

  return (
    <div className='tophead'>
  <div className='head1'>
    <header>
        <h2>Controls</h2>
      </header>
  </div>        
    <div className='head2'>
          <header>
        <h2>Form Builder</h2>
      </header>
      </div>
      <div className='head3'>
          <header>
        <h2 onClick={setPreveiw}>Preveiw</h2>
      </header>
      </div>
      {openPreveiw && (
        <Preveiw
        setPreveiw={setPreveiw}
      />)}
  </div>
  )
}
