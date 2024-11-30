import { useState } from 'react';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Resume from './resume';

function App() {
  const [step, setStep] = useState(0);
  const [contactData, setContactData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  const [skillData, setSkillData] = useState();
  function setStepCounter() {
    if (step < 5) {
      setStep(step + 1);
    }
  }

  function contactInfo(contactInformation) {
    setContactData(contactInformation);
    setStepCounter();
  }
  function educationInfo(educationInformation) {
    setEducationData(educationInformation);
  }
  function experienceInfo(experienceInformation) {
    setExperienceData(experienceInformation);
  }
  function skillInfo(skillInformation) {
    setSkillData(skillInformation);
  }

  return (
    <>
      <div className="mainContainer">
        {step === 0 && <Contact onSubmit={contactInfo} />}
        {step === 1 && (
          <Education onSubmit={educationInfo} nextPage={setStepCounter} />
        )}
        {step === 2 && (
          <Experience onSubmit={experienceInfo} nextPage={setStepCounter} />
        )}
        {step === 3 && (
          <Skills onSubmit={skillInfo} finished={setStepCounter} />
        )}
        {step === 4 && <Resume />}
      </div>
    </>
  );
}

export default App;
