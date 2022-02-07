import PropTypes from 'prop-types';
import { BoxSection, Title } from './Section.styled';
import { CSSTransition } from 'react-transition-group';
import styles from '../../index';

const Section = ({ title, children }) => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
      <BoxSection>
        <Title>{title}</Title>
        {children}
      </BoxSection>
    </CSSTransition>
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
