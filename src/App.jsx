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
  function setStepCounter(num) {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setStep(num);
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
        {step === 1 && <Education onSubmit={educationInfo} nextPage={setStepCounter} />}
        {step === 2 && <Experience onSubmit={experienceInfo} nextPage={setStepCounter} />}
        {step === 3 && <Skills onSubmit={skillInfo} nextPage={setStepCounter} />}
        {step >= 4 && (
          <div className="resumeMainPage">
            <div className="resumeButtonEditors">
              {step === 4 && (
                <>
                  {step === 4 && (
                    <>
                      <button onClick={() => setStep(5)}>Edit Contact Info </button>
                      <button onClick={() => setStep(6)}>Edit Education</button>
                      <button onClick={() => setStep(7)}>Edit Experience</button>
                      <button onClick={() => setStep(8)}>Edit Skills</button>
                    </>
                  )}
                </>
              )}
              {step === 5 && (
                <>
                  <p>Step 5</p>
                </>
              )}
              {step === 6 && (
                <>
                  <p>Step 6</p>
                </>
              )}
              {step === 7 && (
                <>
                  <p>Step 7</p>
                </>
              )}
              {step === 8 && (
                <>
                  <p>Step 8</p>
                </>
              )}
            </div>

            <Resume />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
