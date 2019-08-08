import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import { Container, MeetupBody, ImageDiv, FooterData } from './styles';
import MeetAppButton from '~/components/MeetAppButton';
import history from '~/services/history';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

export default function Details() {
  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.selectedMeetup);
  const banner_url = meetup.banner ? meetup.banner.url : '';

  function handleEditMeetup() {
    history.push('/meetup');
  }

  function handleCancelMeetup() {
    // Confirm message asking the user if he is sure about cancel this meetup
    confirmAlert({
      title: 'Cancel Meetup',
      message:
        'You are about to cancel this meetup, this proccess is irreversible, do you want to proceed?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(cancelMeetupRequest(meetup.id, meetup.title)),
        },
        {
          label: 'No',
        },
      ],
    });
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <MeetAppButton type="button" blue onClick={handleEditMeetup}>
            <div>
              <MdEdit size={16} color="#fff" />
              <span>Edit</span>
            </div>
          </MeetAppButton>
          <MeetAppButton
            type="button"
            disabled={!meetup.cancelable}
            onClick={handleCancelMeetup}
          >
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
