import { useState } from 'react';

function Education({ onSubmit }) {
  const [schoolName, setSchoolName] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [graduationDate, setGraduationDate] = useState('');

  function educationCreate() {
    const educationInfo = {
      schoolName,
      schoolLocation,
      degree,
      fieldOfStudy,
      graduationDate,
    };
    onSubmit(educationInfo);
  }

  return (
    <div className="experienceContainer">
      <div className="contactContainer">
        <form className="contactForm">
          <div>
            <label htmlFor="">School Name</label>
            <input
              type="text"
              className="schoolName"
              value={schoolName}
              onChange={(e) => {
                setSchoolName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">School Location</label>
            <input
              type="text"
              className="schoolLocation"
              value={schoolLocation}
              onChange={(e) => {
                setSchoolLocation(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Degree</label>
            <input
              type="text"
              className="degree"
              value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
              }}
            />
          </div>
          <div className="stateAndZip"></div>
          <div>
            <label htmlFor="">Field of study</label>
            <input
              type="text"
              className="fieldOfStudy"
              value={fieldOfStudy}
              onChange={(e) => {
                setFieldOfStudy(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Graduation Date</label>
            <input
              type="text"
              className="graduationDate"
              value={graduationDate}
              onChange={(e) => {
                setGraduationDate(e.target.value);
              }}
            />
          </div>
        </form>
        <button onClick={educationCreate} className="contactFormButton">
          Submit
        </button>
      </div>
      <div className="experiencePreviewContainer">
        <div className="experiencePreview"></div>
      </div>
    </div>
  );
}

export default Education;
