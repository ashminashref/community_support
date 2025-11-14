import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CampaignIcon from '@mui/icons-material/Campaign'; // Example Icon

// 1. Added IDs (for better React keys) and actual icons
const announcement = [
    {
        id: 1,
        icon: <CampaignIcon />,
        heading: 'Community Meeting',
        details: 'Monthly meeting will be held at the town hall.',
        date: 'Nov 18, 2025'
    },
    {
        id: 2,
        icon: <CampaignIcon />,
        heading: 'Water Supply Update',
        details: 'Water supply will be interrupted from 10 AM to 2 PM.',
        date: 'Nov 19, 2025',
        gradient:'danger'
    },
]

function Announce() {
    return (
        // 2. Added px-3 for horizontal padding
        <div className='mt-5 pt-5 px-3'>
            <h3>Local Announcements</h3>

            {/* 3. Changed mt-5 to mt-4 (less space), added gy-3 (vertical gap) */}
            <Row className='mt-4 gy-3'>
                {announcement.map((item) => (
                    <Col key={item.id}>
                      
                        <div className='d-flex gap-3 quick-box rounded-3 align-items-start p-3'>
                            
                            <div className="icon-box" 
                            data-gradient-preset ={item.gradientPreset|| 'deafault'}
                            >
                                {item.icon}
                            </div>

                            <div>
                                <p className='m-0 p-0 fw-bold'>{item.heading}</p>
                                <p className='m-0 p-0 quick-p fw-light'>{item.details}</p>
                                <p className='m-0 p-0 text-muted small mt-1'>{item.date}</p>
                            </div>

                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Announce