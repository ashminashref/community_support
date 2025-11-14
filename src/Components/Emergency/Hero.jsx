import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Hero.css' // <-- Import the new CSS file

// --- SVG Icons ---
// It's cleanest to define these right in the file
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const AmbulanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 10H6"></path><path d="M8 8V12"></path><path d="M18 18h-1a1 1 0 0 1-1-1v-3h-3v-4h3V7a1 1 0 0 1 1-1h1"></path>
    <path d="M14 17.5V14H6v3.5a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 14 17.5Z"></path><path d="M6 14V6a1 1 0 0 1 1-1h4v10"></path>
    <path d="M14 5h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"></path><path d="M17 14h.5a2.5 2.5 0 0 1 2.5 2.5V20a0 0 0 0 1 0 0h-3a0 0 0 0 1 0 0v-3.5A2.5 2.5 0 0 1 17 14Z"></path>
  </svg>
);

const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.4 4.2c-1.3 1.3-2 3.1-2 5.1 0 2.4 1.1 4.5 2.8 5.7 0 0 .1.1.1.1.2 0 .2.2.3.3.2.2.3.4.4.6.2.2.4.4.6.6.2.2.4.4.7.6 1.1 1 2.8 1.6 4.5 1.6 4.6 0 8.3-3.7 8.3-8.3 0-2-1.2-3.8-2.9-4.8-1.7-1-3.8-1.2-5.7-.6-.2 0-.4 0-.5.1-.2.1-.4.1-.6.2-.2.1-.4.2-.6.4-.2.2-.4.4-.5.6-.2.2-.4.5-.5.8-.1.3-.2.6-.3.9-.1.3-.1.6-.2.9-.1.3-.2.6-.2.9-.1.3-.2.6-.3.9 0 .3-.1.6-.1.9l-.1 1c0 .3 0 .6-.1.9 0 .3-.1.6-.1.9s0 .6-.1.9v.3c0 .2 0 .4-.1.6v.3c0 .2 0 .4-.1.6 0 .2 0 .4-.1.6s0 .4-.1.6v.3c0 .2 0 .4-.1.6 0 .2 0 .4-.1.6s0 .4-.1.6c-.1.2-.1.4-.2.6s-.1.4-.2.6c0 .2-.1.4-.2.6s-.1.4-.2.6c0 .2-.1.4-.2.6s-.1.4-.2.6c-.1.2-.2.4-.3.6s-.2.4-.3.6c-.1.2-.2.4-.3.6s-.2.4-.3.6c-.1.2-.2.4-.3.6s-.2.4-.3.6c-.3.4-.6.8-1 1.2-2 2-5.2 2-7.2 0-2-2-2-5.2 0-7.2.9-.9 2-1.4 3.2-1.7.4-.1.8-.2 1.2-.2s.8-.1 1.2-.2c.4-.1.8-.2 1.2-.2s.8-.1 1.2-.2z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// --- Data for the Cards ---
const emergencyContacts = [
  { 
    id: 'police',
    title: 'Police', 
    number: '100', 
    icon: <ShieldIcon />, 
    tel: '100' 
  },
  { 
    id: 'ambulance',
    title: 'Ambulance', 
    number: '108', 
    icon: <AmbulanceIcon />,
    tel: '108'
  },
  { 
    id: 'fire',
    title: 'Fire Brigade', 
    number: '101', 
    icon: <FireIcon />,
    tel: '101'
  },
];

// --- Call Handler Function ---
const handleCall = (number) => {
  window.location.href = `tel:${number}`;
  console.log(`Calling ${number}`);
};


function Hero() {
  return (
    <div className='mt-5 pt-5 px-3'> {/* Added horizontal padding */}
        <h5 className='text-danger'>Emergency Contacts</h5>
        
        {/* This text is from your screenshot and replaces the 'box' */}
        <p className='emergency-intro'>
          In case of a life-threatening emergency, call directly. Use these contacts for urgent local help.
        </p>

        {/* --- This is the Mapped List --- */}
        <div className="emergency-list">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="emergency-card">
              <div className="card-content">
                <div className={`icon-bg ${contact.id}`}>
                  {contact.icon}
                </div>
                <div className="card-info">
                  <h6 className="card-title">{contact.title}</h6>
                  <p className="card-number">{contact.number}</p>
                </div>
              </div>
              <div className="call-icon" onClick={() => handleCall(contact.tel)}>
                <PhoneIcon />
              </div>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Hero