import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { format, isBefore } from 'date-fns';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { MdAddCircle, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import {
  selectMeetupRequest,
  unselectMeetupRequest,
} from '~/store/modules/meetup/actions';
import history from '~/services/history';

import MeetAppButton from '~/components/MeetAppButton';
import { Container, MeetupList, Scroll, ArrowButton } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`/mymeetups?page=${page}`);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(meetup => {
        const compareDate = utcToZonedTime(meetup.date, timezone);

        return {
          ...meetup,
          formattedDate: format(compareDate, "d 'de' MMMM', às 'H'h'", {
            locale: pt,
          }),
        };
      });

      console.tron.warn(data.length);

      if (data.length < 10) {
        setMaxPage(page);
      } else {
        setMaxPage(page + 1);
      }

      console.tron.warn(maxPage);

      setMeetups(data);
    }

    loadMeetups();
  }, [maxPage, page]);

  function handleNewMeetUp() {
    dispatch(unselectMeetupRequest());
    history.push('/meetup');
  }

  function handleDetails(meetup) {
    dispatch(selectMeetupRequest(meetup));
  }

  function handlePageNext() {
    if (page < maxPage) {
      setPage(page + 1);
    }
  }

  function handlePagePreviews() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <Container>
      <header>
        <strong>My meetups</strong>
        <div>
          <ArrowButton
            type="button"
            onClick={handlePagePreviews}
            disabled={page === 1}
          >
            <MdChevronLeft size={36} color="#fff" />
          </ArrowButton>
          <h2>{`Page ${page}`}</h2>
          <ArrowButton
            type="button"
            onClick={handlePageNext}
            disabled={maxPage === page}
          >
            <MdChevronRight size={36} color="#fff" />
          </ArrowButton>
        </div>
        <MeetAppButton type="button" onClick={handleNewMeetUp}>
          <div>
            <MdAddCircle size={16} color="#fff" />
            <span>New meetup</span>
          </div>
        </MeetAppButton>
      </header>

      <Scroll>
        <ul>
          {meetups.map(meetup => (
            <MeetupList key={meetup.id} nonCancelable={!meetup.cancelable}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <button type="button" onClick={() => handleDetails(meetup)}>
                  <MdChevronRight size={22} color="#fff" />
                </button>
              </div>
            </MeetupList>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}
