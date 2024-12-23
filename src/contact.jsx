import { useState } from 'react';

function Contact({ onSubmit, step, back, contact_data = {} }) {
  const [firstName, setFirstName] = useState(contact_data.firstName || '');
  const [lastName, setLastName] = useState(contact_data.lastName || '');
  const [city, setCity] = useState(contact_data.city || '');
  const [state, setState] = useState(contact_data.state || '');
  const [zipCode, setZipCode] = useState(contact_data.zipCode || '');
  const [phone, setPhone] = useState(contact_data.phone || '');
  const [email, setEmail] = useState(contact_data.email || '');
  const [website, setWebsite] = useState(contact_data.website || '');

  //   just making a space between these
  const contactCreate = () => {
    const contactInfo = {
      firstName,
      lastName,
      city,
      state,
      zipCode,
      phone,
      email,
      website,
    };
    onSubmit(contactInfo);
  };

  return (
    <div className="contactContainer">
      <form className="contactForm">
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">City</label>
          <input
            type="text"
            className="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="stateAndZip">
          <div className="split">
            <label htmlFor="">State</label>
            <input
              type="text"
              className="state"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
          <div className="split">
            <label htmlFor=""> Zip Code</label>
            <input
              type="text"
              className="zipCode"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input
            type="text"
            className="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            className="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Website</label>
          <input
            type="text"
            className="website"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
        </div>
      </form>
      <button onClick={contactCreate} className="contactFormButton">
        Submit
      </button>
      {step === 5 && (
        <button onClick={() => back(4)} className="contactFormButton">
          Back
        </button>
      )}
    </div>
  );
}

export default Contact;
