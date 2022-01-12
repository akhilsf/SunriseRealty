import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoPic = styled.img`
  width: auto;
  height: auto;
`;

const Logo = ({ screenWidth, isFooter }) => {
  const [logoWidth, setLogoWidth] = useState(() => {});

  useEffect(() => {
    let width;

    if (screenWidth < 550) {
      width = 200;
    } else if (screenWidth < 750) {
      width = 250;
    } else {
      width = 300
    }
    if (isFooter) {
      width = width * .60;
    }

    setLogoWidth(width);

  }, [screenWidth]);

  return (
    <LogoPic src="assets/SR_logo.jpeg" alt="Sunrise Realty Logo" style={{ maxWidth: logoWidth }} />
  );
};

Logo.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Logo;
