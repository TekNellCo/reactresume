function Resume({ contact, education, experience, skill }) {
  return (
    <div className="resumeSheet">
      <div className="sideBar">
        <h1 className="resumeName">{`${contact.firstName} ${contact.lastName}`}</h1>
        <p className="resumeCity">{`${contact.city}, ${contact.state}, ${contact.zipCode}`}</p>
        <p className="resumeEmail">{contact.email}</p>
        <p className="resumePhone">{contact.phone}</p>
        <p className="resumeWebsite">{contact.website}</p>
        <h2 className="resumeSkills">Skills</h2>
        <ul>
          {skill.map((skillItem, index) => (
            <li className="skillsItem" key={index}>
              {skillItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="mainPage">
        <h2 className="resumeCategories">Work History</h2>
        {experience.map((experienceItem, item) => (
          <div key={experienceItem.organization}>
            <h3 className="jobTitle">{experienceItem.title}</h3>
            <hr />
            <p className="jobNameDates">{`${experienceItem.organization} | ${experienceItem.startMonth}/${experienceItem.startYear} - ${experienceItem.endMonth}/${experienceItem.endYear}`}</p>
            <p className="resumeJobDescription"> {experienceItem.description}</p>
          </div>
        ))}

        <h2 className="resumeCategories">Education</h2>
        {education.map((educationItem, index) => (
          <div key={educationItem.schoolName}>
            <h3 className="resumeSchoolName">
              <span className="jobTitle">{educationItem.schoolName}</span>
              {'\u00A0'}|{'\u00A0'}
              <span className="schoolLocation">
                {educationItem.schoolLocation},{'\u00A0'}
                {educationItem.graduationDate}
              </span>
            </h3>
            <hr></hr>

            <p className="resumeDegree">
              {' '}
              <b>{`${educationItem.degree} ${educationItem.fieldOfStudy}`}</b>
            </p>
            <p>{educationItem.description}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
