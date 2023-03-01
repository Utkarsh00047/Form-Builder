import React, {useState} from 'react'
//import Preview from '../Preveiw/Preview';
import PreviewContainer from '../Preview/PreviewContainer';
import './Header.css';

export const Header = () => {

  const [openPreview, setOpenPreview] = useState(false);
  const setPreview = () => {
    setOpenPreview(!openPreview);
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
        <h2 onClick={setPreview}>Preview</h2>
      </header>
      </div>
      {openPreview && (
        <PreviewContainer
        setPreview={setPreview}
        openPreview={openPreview}
      />)}
  </div>
  )
}
