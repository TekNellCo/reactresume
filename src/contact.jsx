function Contact() {
  const contactCreate = () => {
    const contactInfo = {
      firstName: lastName,
      city,
      state,
      zipCode,
      phone,
      email,
    };
  };

  return (
    <div className="contactContainer">
      <form className="contactForm">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" className="firstName" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" className="lastName" />
        </div>
        <div>
          <label htmlFor="">City</label>
          <input type="text" className="city" />
        </div>
        <div className="stateAndZip">
          <div className="split">
            <label htmlFor="">State</label>
            <input type="text" className="state" />
          </div>
          <div className="split">
            <label htmlFor=""> Zip Code</label>
            <input type="text" className="zipCode" />
          </div>
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text" className="phone" />
        </div>
        <div>
          <label htmlFor="">Email Address</label>
          <input type="text" className="email" />
        </div>
      </form>
      <button onClick={contactCreate} className="contactFormButton">
        Submit
      </button>
    </div>
  );
}

export default Contact;
