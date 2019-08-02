import React from 'react';
import { useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { SubButton } from './styles';

export default function SubmitButton({ children }) {
  const loading = useSelector(state => state.auth.loading);

  return (
    <SubButton loading={loading ? 1 : 0}>
      {loading ? <FaSpinner size={16} color="#fff" /> : children}
    </SubButton>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.string,
};

SubmitButton.defaultProps = {
  children: '',
};
