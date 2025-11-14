import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Quick.css';

// Import MUI icons (as seen in your screenshot)
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupsIcon from '@mui/icons-material/Groups';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

// 1. Create your data array
const quickAccessData = [
  {
    id: 1,
    name: "Bus Times",
    icon: <DirectionsBusIcon className="quick-icon" />
  },
  {
    id: 2,
    name: "Hospitals",
    icon: <LocalHospitalIcon className="quick-icon" />
  },
  {
    id: 3,
    name: "Govt. Reps",
    icon: <GroupsIcon className="quick-icon" />
  },
  {
    id: 4,
    name: "Blood Bank",
    icon: <BloodtypeIcon className="quick-icon" />
  }
];

function Quick() {
  return (
    <div className='mt-5 pt-5'> 
      <h3>Welcome</h3>
      <p className='quick-p'>Get access to anything in your community</p>

      <h3 className='mt-5'>Quick Access</h3>
      
      <Row className='mt-3 g-3'> {/* g-3 adds a gap between columns */}
        {quickAccessData.map((item) => (
          
          // 3. Create the responsive column
          // xs={6} creates a 2-column grid on all screen sizes
          <Col xs={6} key={item.id}>

            {/* 4. This is your single card component */}
            <div className='quick-box rounded-3 d-flex flex-column align-items-center justify-content-center'>
                <p className='m-0 p-0'>              {item.icon}
</p>
              <p className='quick-name m-0'>{item.name}</p>
            </div>

          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Quick;