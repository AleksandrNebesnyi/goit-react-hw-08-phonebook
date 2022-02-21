import { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
// import { alert } from '../../index.css';

import { BoxSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  const [showTitle, setShowTitle] = useState(true);
  return (
    <BoxSection>
      <CSSTransition
        in={showTitle}
        timeout={300}
        unmountOnExit
        classNames="alert"
        onEnter={() => setShowTitle(true)}
        onExited={() => setShowTitle(false)}
      >
        <Title>{title}</Title>
      </CSSTransition>

      {children}
    </BoxSection>
  );
};

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
