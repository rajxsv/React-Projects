import React, { useState } from 'react';
import './App.css'; 

const GradeCalculator = () => {
  const [subjects, setSubjects] = useState([{ weightage: null, score: null }]);
  const [cumulativeGrade, setCumulativeGrade] = useState(0);

  const handleAddSubject = () => {
    setSubjects([...subjects, { weightage: null, score: null }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSubjects = [...subjects];
    newSubjects[index][name] = parseFloat(value);
    setSubjects(newSubjects);
  };

  const removeEntry = () => {
    const updatedSubjects = subjects.slice(0, -1);
    setSubjects(updatedSubjects);
  }

  const calculateCumulativeGrade = () => {
    let scored = 0;
    let maxPossible = 0;



    subjects.forEach((subject) => {
      const { weightage, score } = subject;
      scored += (weightage*score); // Assuming score is out of 10
      maxPossible += (weightage*10)
    });
    setCumulativeGrade(scored/maxPossible);
  };

  return (
    <div className='mainDiv' >
      <h1>Weightage and Scored</h1>
      {subjects.map((subject, index) => (
        <div key={index} style={{marginBottom:10}}>
          <input 
            type="number"
            name="weightage"
            placeholder="Weightage"
            value={subject.weightage}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
           style={{marginLeft:50}}
            type="number"
            name="score"
            placeholder="Score out of 10"
            value={subject.score}
            onChange={(e) => handleInputChange(index, e)}
          />
        </div>
      ))}
      <button onClick={handleAddSubject}>Add Subject</button>
      <button onClick={calculateCumulativeGrade}>Calculate Grade</button>
      <button onClick={removeEntry}>Remove last entry</button>
      <p>Cumulative Grade: {cumulativeGrade}</p>
    </div>
  );
};

export default GradeCalculator;
