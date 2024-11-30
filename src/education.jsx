import { useState } from 'react';

function Education({ onSubmit, nextPage }) {
  const [selectedEducation, setSelectedEducation] = useState('');
  const [educationArray, setEducationArray] = useState([]);
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
    let updatedEducationArray;
    if (selectedEducation) {
      updatedEducationArray = educationArray.map((school) =>
        school === selectedEducation ? educationInfo : school
      );
      setEducationArray(updatedEducationArray);
      setSelectedEducation('');
    } else {
      updatedEducationArray = [...educationArray, educationInfo];
      setEducationArray(updatedEducationArray);
    }

    setSchoolName('');
    setSchoolLocation('');
    setDegree('');
    setFieldOfStudy('');
    setGraduationDate('');

    onSubmit(updatedEducationArray);
  }

  function handleEdit(education) {
    setSchoolName(education.schoolName);
    setSchoolLocation(education.schoolLocation);
    setDegree(education.degree);
    setFieldOfStudy(education.fieldOfStudy);
    setGraduationDate(education.graduationDate);
    setSelectedEducation(education);
  }

  function deleteEdit(index) {
    const updateEducation = educationArray.filter((booty, i) => i != index);
    setEducationArray(updateEducation);
    onSubmit(updateEducation);
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
        <button onClick={nextPage} className="contactFormButton">
          Finished
        </button>
      </div>
      <div className="experiencePreviewContainer">
        <div className="experiencePreview">
          {educationArray.map((education, index) => (
            <div key={index} className="tilePreview">
              <p className="titleName">{education.schoolName}</p>
              <div className="buttonContainer">
                <button
                  onClick={() => {
                    handleEdit(education);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteEdit(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
