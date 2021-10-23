import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PoseItem = ({ pose }) => {
  const [img, setImg] = useState('');

  const getPoseImage = () => {
    axios.get(`/images/${pose.name.split(' ').join('')}`)
      .then(({ data }) => {
        console.log('PoseImage:', data);
        setImg(data);
        //return data;
      })
      .catch((err) => {
        console.log('getPoseImage:', err);
      });
  };

  useEffect(() => {
    getPoseImage();
  })

  return (
    <div>
      <div>{pose.name}</div>
      <img src={img} style={{maxHeight: '100px', maxWidth: '100px'}}/>
    </div>
  )

}

export default PoseItem;
