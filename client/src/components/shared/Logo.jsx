import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoPic = styled.img`
  width: auto;
  height: auto;
`;

const Logo = ({ screenWidth }) => {
  const [logoWidth, setLogoWidth] = useState(() => {});

  useEffect(() => {
    if (screenWidth < 550) {
      setLogoWidth(200)
    } else if (screenWidth < 750) {
      setLogoWidth(250);
    } else {
      setLogoWidth(400);
    }
  }, [screenWidth]);

  return (
    <LogoPic src="assets/SR_logo.jpeg" alt="Sunrise Realty Logo" style={{ maxWidth: logoWidth }} />
  );
};

Logo.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Logo;
