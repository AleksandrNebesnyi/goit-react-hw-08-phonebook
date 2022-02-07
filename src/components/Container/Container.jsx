
import {MainContainer} from './Container.styled'
import PropTypes from 'prop-types';


const Container = ({ children }) => <MainContainer>{children}</MainContainer>;

Container.propTypes = {
    children: PropTypes.node,
  };
export default Container;