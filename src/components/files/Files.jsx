import React from 'react';
import '../../styles/files.css';

export default function Files() {
  return (
    <div className="files">
      <div className="topics">
        <div className="left">
          <p>Type</p>
          <p>Name</p>
        </div>
        <div className="right">
          <p className='published'>Published<img className='img' src="https://img.icons8.com/metro/26/C850F2/long-arrow-down.png"/> </p>
          <p>Last downloaded</p>
          <p>Download</p>
        </div>
      </div>
      <hr/>
      <div className='availableFiles'>
      <div className="type">
      <img src="https://img.icons8.com/fluency/48/null/stack-of-photos.png"/>
      <img src="https://img.icons8.com/color/48/null/google-docs--v1.png"/>
      <img src="https://img.icons8.com/color/48/null/pdf-2--v1.png"/>
      <img src="https://img.icons8.com/fluency/48/null/stack-of-photos.png"/>
      <img src="https://img.icons8.com/color/48/null/google-docs--v1.png"/>
      <img src="https://img.icons8.com/color/48/null/pdf-2--v1.png"/>
      </div>
      <div className="name">
        <p>Sample_name-Finances_2023.docx</p>
        <p>Sample_name-Finances_2023.docx</p>
        <p>Sample_name-Finances_2023.docx</p>
        <p>Sample_name-Finances_2023.docx</p>
        <p>Sample_name-Finances_2023.docx</p>
        <p>Sample_name-Finances_2023.docx</p>
      </div>
      
      <div className="date first-date">
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
      </div>
      <div className="date second-date">
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
        <p>15.11.2021</p>
      </div>
      
      <div className="download">
        <input type='checkbox'></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
      </div>
    </div>
    </div>
    
  );
}
