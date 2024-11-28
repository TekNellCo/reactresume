import { useState } from 'react';

function Experience({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [location, setLocation] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  //   just making a space between these
  const experienceCreate = () => {
    const experienceInfo = {
      title,
      organization,
      location,
      startDate: `${startMonth} ${startYear}`,
      endDate: `${endMonth} ${endYear}`,
    };
    onSubmit(experienceInfo);
  };

  return (
    <div className="contactContainer">
      <form className="contactForm">
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
      </form>
      <button onClick={experienceCreate} className="contactFormButton">
        Submit
      </button>
    </div>
  );
}

export default Experience;
