import { CaretIcon } from 'assets';
import styled from 'styled-components';

type Directions = 'top' | 'right' | 'bottom' | 'left';

interface CaretProps {
  direction?: Directions;
}

const directionAngles: { [key in Directions]: string } = {
  top: '-90',
  right: '0',
  bottom: '90',
  left: '180',
};

export const Caret = styled(CaretIcon)<CaretProps>`
  transform: ${(props) =>
    `rotate(${directionAngles[props.direction as Directions]}deg)`};
`;

Caret.defaultProps = {
  direction: 'right',
};
