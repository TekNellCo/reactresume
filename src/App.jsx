import { useState } from 'react';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
function App() {
  const [step, setStep] = useState(0);
  const [contactData, setContactData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  function contactInfo(contactInformation) {
    setContactData(contactInformation);
    setStep(step + 1);
  }
  function educationInfo(educationInformation) {
    setEducationData(educationInformation);
    setStep(step + 1);
  }
  function experienceInfo(experienceInformation) {
    setExperienceData(experienceInformation);
    setStep(step + 1);
    console.log(experienceInformation);
  }

  return (
    <>
      {step === 0 && <Contact onSubmit={contactInfo} />}
      {step === 1 && <Education onSubmit={educationInfo} />}
      {step === 2 && <Experience onSubmit={experienceInfo} />}
    </>
  );
}

export default App;
