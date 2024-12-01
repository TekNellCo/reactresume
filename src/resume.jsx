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
        <h2>Work History</h2>
        {experience.map((experienceItem, item) => (
          <div key={experienceItem.organization}>
            <h3 className="experienceHeader">{experienceItem.title}</h3>
            <p className="jobNameDates">{`${experienceItem.organization} | ${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
            <p className="resumeJobDescription">{experienceItem.description}</p>
          </div>
        ))}
        <h2 className="resumeEducation">Education</h2>
        {education.map((educationItem, index) => (
          <div key={educationItem.schoolName}>
            <h3 className="resumeSchoolName">
              {educationItem.schoolName} <i>{educationItem.graduationDate}</i>
            </h3>
            <p>
              <i>{educationItem.schoolLocation}</i>
            </p>
            <p className="resumeDegree">{`${educationItem.degree} ${educationItem.fieldOfStudy}`}</p>
            <p>{educationItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
