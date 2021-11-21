import styled from 'styled-components';
import { Range } from 'utils/types';

type AlignJustify =
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-evenly'
  | 'space-between'
  | 'center';

interface RowProps {
  justify?: AlignJustify;
  align?: AlignJustify;
  margin?: string;
}

export const Row = styled.div<RowProps>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;

Row.defaultProps = {
  justify: 'flex-start',
};

interface ColProps {
  span: Range<1, 13>;
  margin?: string;
  justify?: AlignJustify;
  align?: AlignJustify;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex-flow: column nowrap;
  width: ${(props) => `${(100 / 12) * props.span}%`};
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

Col.defaultProps = {
  justify: 'flex-start',
};
