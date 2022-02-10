import { TailSpin } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = ({ height = 100, width = 100 }) => {
  return (
    <LoaderStyled>
      <TailSpin color="#02be6e" height={height} width={width} />
    </LoaderStyled>
  );
};

export default Loader;


