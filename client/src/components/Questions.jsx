import React from 'react';
import { useLocation } from 'react-router-dom';

function Questions() {
  const location = useLocation();
  const { id } = location.state || {};
  console.log(id);

  return <div>Questions</div>;
}

export default Questions;
