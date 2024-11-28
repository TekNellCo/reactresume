function Resume() {
  return (
    <div className="resumeSheet">
      <div className="sideBar">
        <h1 className="resumeName">Nelson Cardona</h1>
        <p className="resumeCity">West Palm Beach,Fl, 33406</p>
        <p className="resumeEmail">nelsoncardonajr520@gmail.com</p>
        <p className="resumePhone">+1 561-379-2779</p>
        <p className="resumeWebsite">www.TekNellCo.Com</p>
        <h2 className="resumeSkills">Skills</h2>
        <ul className="resumeUnorderedList">
          <li>Photoshop</li>
          <li>Event</li>
        </ul>
      </div>
      <div className="mainPage">
        <h2>Work History</h2>
        <h3 className="experienceHeader">Customer Support Specialist</h3>
        <p className="jobNameDates">Amego | December 2023 - October 2024</p>
        <p resumeJobDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
          repellat perspiciatis necessitatibus voluptate deserunt dolores harum
          soluta mollitia ipsum, enim voluptates nam a iusto corrupti ab eaque
          delectus accusantium modi!
        </p>
        <h2 className="resumeEducation">Education</h2>
        <h3 className="resumeSchoolName">
          Palm Beach State College <i>1989-2004</i>
        </h3>
        <p>
          <i>West Palm Beach</i>
        </p>
        <p className="resumeDegree">degree // field of study///</p>
      </div>
    </div>
  );
}

export default Resume;
