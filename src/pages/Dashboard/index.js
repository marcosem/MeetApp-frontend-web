import React from 'react';
// import api from '~/services/api';
import { FaPlusCircle, FaChevronRight } from 'react-icons/fa';
import { Container } from './styles';
import MeetAppButton from '~/components/MeetAppButton';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>My meetups</strong>
        <MeetAppButton type="button">
          <div>
            <FaPlusCircle size={14} color="#fff" />
          </div>
          New meetup
        </MeetAppButton>
      </header>

      <ul>
        <li>
          <strong>Meetup Title</strong>
          <div>
            <span>xx de xxxxxx, às xh</span>
            <button type="button">
              <FaChevronRight size={16} color="#fff" />
            </button>
          </div>
        </li>

        <li>
          <strong>Meetup Title</strong>
          <div>
            <span>xx de xxxxxx, às xh</span>
            <button type="button">
              <FaChevronRight size={16} color="#fff" />
            </button>
          </div>
        </li>

        <li>
          <strong>Meetup Title</strong>
          <div>
            <span>xx de xxxxxx, às xh</span>
            <button type="button">
              <FaChevronRight size={16} color="#fff" />
            </button>
          </div>
        </li>
      </ul>
    </Container>
  );
}
