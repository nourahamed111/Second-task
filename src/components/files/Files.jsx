import React, { useState } from 'react';
import '../../styles/files.css';
import pdfIcon from "../../icons/pdf_icon.svg";
import zipIcon from "../../icons/zip_icon.svg";
import wordIcon from "../../icons/word_icon.svg";
import imageIcon from "../../icons/image_icon.svg";

export default function Files() {
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortIcon, setSortIcon] = useState('https://img.icons8.com/metro/26/C850F2/long-arrow-down.png');

  const handleSort = () => {
    if (sortDirection === 'asc') {
      setSortDirection('desc');
      setSortIcon('https://img.icons8.com/metro/26/C850F2/long-arrow-up.png');
    } else {
      setSortDirection('asc');
      setSortIcon('https://img.icons8.com/metro/26/C850F2/long-arrow-down.png');
    }
  };

  const files = [
    {
      type: pdfIcon,
      name: 'Sample_name-Finances_2023.docx',
      firstDate: new Date('2021-1-15'),
      secondDate: new Date('2021-1-15'),
    },
    {
      type: imageIcon,
      name: 'Sample_name-Finances_2023.docx',
      firstDate: new Date('2021-3-15'),
      secondDate: new Date('2021-1-15'),
    }, {
      type: pdfIcon,
      name: 'Sample_name-Finances_2023.docx',
      firstDate: new Date('2021-6-15'),
      secondDate:new Date('2021-1-15'),
    }, {
      type: zipIcon,
      name: 'Sample_name-Finances_2023.docx',
      firstDate: new Date('2021-8-15'),
      secondDate: new Date('2021-1-15'),
    },
    {
      type: wordIcon,
      name: 'Sample_name-Finances_2023.docx',
      firstDate: new Date('2021-8-14'),
      secondDate: new Date('2021-1-15'),
    },
  ];

  const sortedFiles = [...files].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.firstDate.getTime() - b.firstDate.getTime();
    } else {
      return b.firstDate.getTime() - a.firstDate.getTime();
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th className='typeTh'>Type</th>
          <th className='nameTh'>Name</th>
          <div className='published-cont'>
          <th className='published' onClick={handleSort}>
            Published
            <img className='img' src={sortIcon} />
          </th>
          </div>
          <th className='lastDownloadTh'>Last downloaded</th>
          <th className='downloadTh'>Download</th>
        </tr>
        <tr><th colSpan="5"><hr/></th></tr>
      </thead>
      <tbody>
        {sortedFiles.map((file) => (
          <tr key={file.name}>
            <td className='typeTd' ><img src={file.type} /></td>
            <td className="nametd">{file.name}</td>
            <td className="first-date">{file.firstDate.toLocaleDateString()}</td>
            <td className="second-date">{file.secondDate.toLocaleDateString()}</td>
            <td className='inputTd' ><input type='checkbox' /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

