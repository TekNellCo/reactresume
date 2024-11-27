function Education() {
  return (
    <div className="contactContainer">
      <form className="contactForm">
        <div>
          <label htmlFor="">School Name</label>
          <input type="text" className="schoolName" />
        </div>
        <div>
          <label htmlFor="">School Location</label>
          <input type="text" className="schoolLocation" />
        </div>
        <div>
          <label htmlFor="">Degree</label>
          <input type="text" className="degree" />
        </div>
        <div className="stateAndZip"></div>
        <div>
          <label htmlFor="">Field of study</label>
          <input type="text" className="fieldOfStudy" />
        </div>
        <div>
          <label htmlFor="">Graduation Date</label>
          <input type="text" className="graduationDate" />
        </div>
      </form>
      <button className="contactFormButton">Submit</button>
    </div>
  );
}

export default Education;
