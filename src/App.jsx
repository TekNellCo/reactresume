import { useState } from 'react';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
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
    setStepCounter();
  }
  function experienceInfo(experienceInformation) {
    setExperienceData(experienceInformation);
    setStepCounter();
  }
  function skillInfo(skillInformation) {
    setSkillData(skillInformation);
  }

  return (
    <>
      {step === 0 && <Contact onSubmit={contactInfo} />}
      {step === 1 && <Education onSubmit={educationInfo} />}
      {step === 2 && <Experience onSubmit={experienceInfo} />}
      {step === 3 && <Skills onSubmit={skillInfo} finished={setStepCounter} />}
      {step === 4 && <Contact />}
    </>
  );
}

export default App;
