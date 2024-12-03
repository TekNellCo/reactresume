import { useState } from 'react';
import { useEffect } from 'react';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Resume from './resume';

function App() {
  ////Local Storage, Checks if there is data, if not, add defaults
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('step');
    return savedStep ? JSON.parse(savedStep) : 0;
  });
  const [contactData, setContactData] = useState(() => {
    const savedContacts = localStorage.getItem('contactData');
    return savedContacts ? JSON.parse(savedContacts) : {};
  });

  const [educationData, setEducationData] = useState(() => {
    const savedEducation = localStorage.getItem('educationData');
    return savedEducation ? JSON.parse(savedEducation) : [];
  });
  const [experienceData, setExperienceData] = useState(() => {
    const savedExperience = localStorage.getItem('experienceData');
    return savedExperience ? JSON.parse(savedExperience) : [];
  });
  const [skillData, setSkillData] = useState(() => {
    const savedSkills = localStorage.getItem('skillData');
    return savedSkills ? JSON.parse(savedSkills) : [];
  });

  ////stores data every time it updates
  useEffect(() => {
    localStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  useEffect(() => {
    localStorage.setItem('contactData', JSON.stringify(contactData));
  }, [contactData]);

  useEffect(() => {
    localStorage.setItem('educationData', JSON.stringify(educationData));
  }, [educationData]);
  useEffect(() => {
    localStorage.setItem('experienceData', JSON.stringify(experienceData));
  }, [experienceData]);
  useEffect(() => {
    localStorage.setItem('skillData', JSON.stringify(skillData));
  }, [skillData]);

  function setStepCounter(num) {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 6 || step === 7 || step === 8) {
      setStep(4);
    } else {
      setStep(num);
    }
  }

  function contactInfo(contactInformation) {
    setContactData(contactInformation);
    step === 0 && setStepCounter();
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
        {step === 0 && <Contact step={step} onSubmit={contactInfo} />}
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
                  <Contact onSubmit={contactInfo} step={step} back={setStep} />
                </>
              )}
              {step === 6 && (
                <>
                  <Education onSubmit={educationInfo} nextPage={setStepCounter} />
                </>
              )}
              {step === 7 && (
                <>
                  <Experience onSubmit={experienceInfo} nextPage={setStepCounter} />
                </>
              )}
              {step === 8 && (
                <>
                  <Skills onSubmit={skillInfo} nextPage={setStepCounter} />
                </>
              )}
            </div>
            <Resume contact={contactData} education={educationData} experience={experienceData} skill={skillData} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
