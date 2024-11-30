function Resume({ contact, education, experience, skill }) {
  return (
    <div className="resumeSheet">
      <div className="sideBar">
        <h1 className="resumeName">{`${contact.firstName} ${contact.lastName}`}</h1>
        <p className="resumeCity">{`${contact.city}, ${contact.state}, ${contact.zipCode}`}</p>
        <p className="resumeEmail">{contact.email}</p>
        <p className="resumePhone">{contact.phone}</p>
        <p className="resumeWebsite">(NEEDS A WEBSITE)</p>
        <h2 className="resumeSkills">
          <ul>
            {skill.map((skillItem, index) => (
              <li key={index}>{skillItem}</li>
            ))}
          </ul>
        </h2>
      </div>
      <div className="mainPage">
        <h2>Work History</h2>
        {experience.map((experienceItem) => (
          <div key={experienceItem.organization}>
            <h3 className="experienceHeader">{experienceItem.title}</h3>
            <p className="jobNameDates">{`${experienceItem.organization} | ${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
            <p className="resumeJobDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellat perspiciatis necessitatibus voluptate deserunt dolores harum
              soluta mollitia ipsum, enim voluptates nam a iusto corrupti ab eaque delectus accusantium modi!
            </p>
          </div>
        ))}

        <h2 className="resumeEducation">Education</h2>
        <h3 className="resumeSchoolName">
          {education.schoolName} <i>{education.graduationDate}</i>
        </h3>
        <p>
          <i>{education.schoolLocation}</i>
        </p>
        <p className="resumeDegree">{`${education.degree} ${education.fieldOfStudy}`}</p>
      </div>
    </div>
  );
}

export default Resume;
