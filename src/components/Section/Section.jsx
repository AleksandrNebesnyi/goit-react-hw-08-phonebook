import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import '../../index';

import { BoxSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <BoxSection>
      <CSSTransition in={true} timeout={500} unmountOnExit classNames="appear">
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
