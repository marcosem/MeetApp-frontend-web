import React from 'react';
import { useSelector } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { Container, MeetupBody, ImageDiv, FooterData } from './styles';
import MeetAppButton from '~/components/MeetAppButton';
import history from '~/services/history';

export default function Details() {
  const meetup = useSelector(state => state.meetup.selectedMeetup);
  const banner_url = meetup.banner ? meetup.banner.url : '';

  function handleEditMeetUp() {
    history.push('/meetup');
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <MeetAppButton type="button" blue onClick={handleEditMeetUp}>
            <div>
              <MdEdit size={16} color="#fff" />
              <span>Edit</span>
            </div>
          </MeetAppButton>
          <MeetAppButton type="button" disabled={!meetup.cancelable}>
            <div>
              <MdDeleteForever size={16} color="#fff" />
              <span>Cancel</span>
            </div>
          </MeetAppButton>
        </div>
      </header>
      <MeetupBody>
        <ImageDiv>
          <img src={banner_url || ''} alt="" />
        </ImageDiv>
        <strong>{meetup.description}</strong>
        <FooterData>
          <div>
            <MdEvent size={16} color="#fff" opacity="0.6" />
            <span>{meetup.formattedDate}</span>
          </div>
          <div>
            <MdPlace size={16} color="#fff" opacity="0.6" />
            <span>{meetup.location}</span>
          </div>
        </FooterData>
      </MeetupBody>
    </Container>
  );
}
