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

  function deleteSkill(index) {
    const updatedSkills = skillsArray.filter((booty, i) => i !== index);
    setSkillArray(updatedSkills);
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
              return (
                <div className="listSkill">
                  <li key={index}>{skill}</li>
                  <button
                    className="listRemove"
                    onClick={() => deleteSkill(index)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
