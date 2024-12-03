import { useState, useEffect } from 'react';

function Experience({ onSubmit, nextPage }) {
  const [selectedExperience, setSelectedExperience] = useState('');
  const [experienceArray, setExperienceArray] = useState(() => {
    const savedExperience = localStorage.getItem('experienceArray');
    return savedExperience ? JSON.parse(savedExperience) : [];
  });
  useEffect(() => {
    localStorage.setItem('experienceArray', JSON.stringify(experienceArray));
  }, [experienceArray]);
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [location, setLocation] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [description, setDescription] = useState('');

  function experienceCreate() {
    const experienceInfo = {
      title,
      organization,
      location,
      description,
      startMonth,
      startYear,
      endMonth,
      endYear,
    };
    let updatedExperienceArray;
    if (selectedExperience) {
      // Update existing experience
      updatedExperienceArray = experienceArray.map((exp) => (exp === selectedExperience ? experienceInfo : exp));
      setExperienceArray(updatedExperienceArray);
      setSelectedExperience(''); // Reset editing mode after updating
    } else {
      // Add new experience
      updatedExperienceArray = [...experienceArray, experienceInfo];
      setExperienceArray(updatedExperienceArray);
    }
    // Reset form fields
    setTitle('');
    setOrganization('');
    setLocation('');
    setStartMonth('');
    setStartYear('');
    setEndMonth('');
    setEndYear('');
    setDescription('');
    onSubmit(updatedExperienceArray);
  }

  function handleEdit(experience) {
    // Populate form with the experience data
    setTitle(experience.title);
    setOrganization(experience.organization);
    setLocation(experience.location);
    setDescription(experience.description);
    setStartMonth(experience.startMonth);
    setStartYear(experience.startYear);
    setEndMonth(experience.endMonth);
    setEndYear(experience.endYear);
    setSelectedExperience(experience); // Set experience to be edited
  }

  //   just making a space between these
  function deleteExperience(index) {
    const updateExperience = experienceArray.filter((booty, i) => i !== index);
    setExperienceArray(updateExperience);
    onSubmit(updateExperience);
  }

  return (
    <div className="experienceContainer">
      <div className="contactContainerExperience">
        <form className="contactFormExperience">
          <div>
            <label htmlFor="">What was your title?</label>
            <input
              type="text"
              className="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Who did you do this for?</label>
            <input
              type="text"
              className="organization"
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Location</label>
            <input
              type="text"
              className="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div className="stateAndZip"></div>
          <div className="stateAndZip">
            <div className="split">
              <label htmlFor="">Start Date</label>
              <input
                placeholder="Month"
                type="text"
                className="startMonth"
                value={startMonth}
                onChange={(e) => {
                  setStartMonth(e.target.value);
                }}
              />
            </div>
            <div className="splitNoLabel">
              <input
                type="text"
                className="startYear"
                value={startYear}
                placeholder="Year"
                onChange={(e) => {
                  setStartYear(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="stateAndZip">
            <div className="split">
              <label htmlFor="">End Date</label>
              <input
                placeholder="Month"
                type="text"
                className="endMonth"
                value={endMonth}
                onChange={(e) => {
                  setEndMonth(e.target.value);
                }}
              />
            </div>
            <div className="splitNoLabel">
              <input
                placeholder="Year"
                type="text"
                className="endYear"
                value={endYear}
                onChange={(e) => {
                  setEndYear(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="descriptionBox">
            <label htmlFor="">Description</label>
            <textarea
              className="description"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </form>
        <button onClick={experienceCreate} className="contactFormButton">
          Add Experience
        </button>
        <button className="contactFormButton" onClick={nextPage}>
          Finished
        </button>
      </div>
      <div className="experiencePreviewContainer">
        <div className="experiencePreview">
          {experienceArray.map((experience, index) => (
            <div key={index} className="tilePreview">
              <p>{experience.title}</p>
              <div className="buttonContainer">
                <button onClick={() => handleEdit(experience)}>Edit</button>
                <button onClick={() => deleteExperience(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
