import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaChevronRight } from 'react-icons/fa';
import {
  format,
  isBefore,
  // parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import MeetAppButton from '~/components/MeetAppButton';
import { Container } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(meetup => {
        const compareDate = utcToZonedTime(meetup.date, timezone);

        return {
          id: meetup.id,
          title: meetup.title,
          past: isBefore(compareDate, new Date()),
          formattedDate: format(compareDate, "d 'de' MMMM', às 'hh'h'", {
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleMeetupDetails(id) {
    console.tron.log(id);
  }

  return (
    <Container>
      <header>
        <strong>My meetups</strong>
        <MeetAppButton type="button">
          <div>
            <FaPlusCircle size={14} color="#fff" />
            <span>New meetup</span>
          </div>
        </MeetAppButton>
      </header>

      <ul>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.formattedDate}</span>
              <button
                type="button"
                onClick={() => handleMeetupDetails(meetup.id)}
              >
                <FaChevronRight size={16} color="#fff" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
