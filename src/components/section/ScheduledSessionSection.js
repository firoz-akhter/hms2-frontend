import React from 'react'
import SearchBar from '../SearchBar'
import Date from '../Date'
import "../css/ScheduledSessionSection.css";
import moment from 'moment';
import { Link } from 'react-router-dom';

function ScheduledSessionSection(props) {

  const allSessions = props.allSessions;
  console.log(allSessions);
  console.log(allSessions[0]._id)


  return (
    <div className='scheduledSessionSection-container'>
        <div className='searchBar-and-date-div'>
            <SearchBar />
            <Date />
        </div>
        <div> <p>Search Result: Sessions({allSessions.length})</p> </div>

        <div className='sessions-container'>
        {
          allSessions.map((session) => {
            return (
              <div className='session-div'>
                <h3>Session 101</h3>
                <p>{session.doctor}</p>
                <p>{moment(session.date).format('MMM-DD-YYYY')}</p>
                <p>{`@ ${session.time}h`}</p>
            
                <Link to={`/addNewAppointment/:${session._id}`}>
                <button className='bookNow-btn'>Book Now</button>
                </Link>
                {/* Book now button will lead to next page for... */}
                {/* booking an appointment  */}
              </div>
            )
          })
        }
        </div>


    </div>
  )
}

export default ScheduledSessionSection