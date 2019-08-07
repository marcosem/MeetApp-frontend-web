import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import { MdAddCircle } from 'react-icons/md';
import { parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Container } from './styles';
import MeetAppButton from '~/components/MeetAppButton';
import BannerInput from './BannerInput';

import {
  updateMeetupRequest,
  addMeetupRequest,
} from '~/store/modules/meetup/actions';

export default function MeetUp() {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.selectedMeetup);
  registerLocale('pt-BR', ptBR);

  const newMeetup = !meetup;
  const [meetupDate, setMeetupDate] = useState(
    newMeetup ? '' : parseISO(meetup.date)
  );

  function handleSave(data) {
    // add meetupDate to data set
    data.date = meetupDate;

    // dispatch actons
    if (newMeetup) {
      dispatch(addMeetupRequest(data));
    } else {
      data.id = meetup.id;
      dispatch(updateMeetupRequest(data));
    }
  }

  function handleDateChange(date) {
    setMeetupDate(date);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSave}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Meetup title" />
        <Input multiline name="description" placeholder="Full description" />

        <DatePicker
          width="900"
          selected={meetupDate}
          locale="pt-BR"
          timeFormat="p"
          showTimeSelect
          timeIntervals={60}
          minDate={new Date()}
          dateFormat="d 'de' MMMM', às' H'h'"
          placeholderText="Meetup date"
          onChange={handleDateChange}
        />

        <Input name="location" placeholder="Location" />

        <MeetAppButton type="submit">
          <div>
            <MdAddCircle size={16} color="#fff" />
            <span>Save Meetup</span>
          </div>
        </MeetAppButton>
      </Form>
    </Container>
  );
}
