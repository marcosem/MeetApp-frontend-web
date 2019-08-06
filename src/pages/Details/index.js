// import React, { useState, useEffect } from 'react';
import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from './styles';
import MeetAppButton from '~/components/MeetAppButton';

// import api from '~/services/api';

export default function Details() {
  /*
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    const { match } = props;
    const { id } = match.params;

    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`);

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

*/
  return (
    <Container>
      <header>
        <strong>MeetUp</strong>
        <MeetAppButton type="button" />
      </header>
    </Container>
  );
}

/*
Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
*/
