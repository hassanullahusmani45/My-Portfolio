import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MinistryFinance from '../assets/ministry_logo.png'
import EntireThinkersTechnology from '../assets/EntireThinkersTechnology.png'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CustomizedTimeline() {
    const isMobile = useMediaQuery('(max-width:640px)');


    return (
        <Timeline position={isMobile ? 'right' : 'alternate'}>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    display={isMobile ? 'none' : undefined}
                >
                    <div className={`text-orange-400`}>April 2025 - Present or Now</div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning" variant="outlined"
                        sx={{
                            width: 60,
                            height: 60,
                            position: "flex",
                            alignItems: 'center',
                            justifyContent: "center",
                        }}>
                        <img src={MinistryFinance} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <span>
                        <div className="text-orange-400">Ministry of Finance</div>
                        <div className=" sm:hidden text-lg text-orange-200">April 2025 - Present or Now</div>
                    </span>
                    <span>
                        <div dir='ltr' className=" mt-4 bg-gray-900 border border-orange-400 shadow-md shadow-orange-400 rounded-2xl rounded-tl-none">
                            <div className="text-orange-500 text-md m-4">Frontend Developer</div>
                            <div className='text-justify text-sm m-4'>
                                Working as a frontend developer responsible for building and maintaining web applications and MIS platforms using React, Redux-Toolkit, React-Hook-Form, Zod, Tailwind CSS, and RESTful APIs. Gained hands-on experience with real-world project workflows and collaborated using GitLab. Worked closely with the development team to deploy and improve user interfaces and optimize performance. Played a key role in modernizing legacy systems and ensuring responsive design across devices.
                            </div>
                        </div>
                    </span>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    display={isMobile ? 'none' : undefined}
                >
                    <div className={`text-yellow-300`}>June 2024 - April 2025</div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='inherit' variant="outlined"
                        sx={{
                            width: 60,
                            height: 60,
                            position: "flex",
                            alignItems: 'center',
                            justifyContent: "center",
                            color: "yellow"
                        }}>
                        <img src={EntireThinkersTechnology} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pt: '150px', pb: '12px', px: 2 }}>
                    <span>
                        <div className="text-yellow-300">Entire Thinkers Technology</div>
                        <div className=" sm:hidden text-lg text-yellow-200">June 2024 - April 2025</div>
                    </span>
                    <span>
                        <div dir='ltr' className={` bg-gray-900 mt-4 text-sm border border-yellow-300 shadow-md shadow-yellow-300 rounded-2xl ${isMobile && "rounded-tl-none"} sm:rounded-tr-none`}>
                            <div className="text-yellow-400 text-md m-4">Fullstack Externship</div>
                            <div className='text-justify text-sm m-4'>
                                Contributed to both frontend and backend development using Laravel, MySQL, Bootstrap, AJAX, jQuery, JavaScript, and Tailwind CSS. Developed secure and responsive web interfaces, built RESTful APIs, and collaborated with the team maintain scalable applications. Gained practical experience in real-world project workflows and version control using GitHub.
                            </div>
                        </div>
                    </span>
                </TimelineContent>
            </TimelineItem>


        </Timeline>
    );
}
















