import { useState } from 'react';

function Skills({ onSubmit, finished }) {
  const [skillsArray, setSkillArray] = useState([]);
  const [skill, setSkill] = useState('');

  function pushSkill(newSkill) {
    if (newSkill.trim() === '') return;
    const updatedSkills = [...skillsArray, newSkill];
    setSkillArray(updatedSkills);
    setSkill('');
    onSubmit(updatedSkills);
  }

  return (
    <div className="skillsMainContainer">
      <div className="skillsInputCard">
        <div className="skillContainer">
          <label htmlFor="">Add Skills</label>
          <input
            className="skill"
            type="text"
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
        </div>
        <button onClick={() => pushSkill(skill)} className="addSkillBtn">
          +
        </button>
        <button className="finishedSkillsBtn" onClick={finished}>
          Finished
        </button>
      </div>
      <div className="skillsRenderCard">
        <div className="skillsContainer">
          <ul>
            {skillsArray.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
