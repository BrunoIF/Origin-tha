import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from 'utils/constants';

export const Container = styled.div`
  width: 100%;
  > * + * {
    margin-top: 4px;
  }

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    > * + * {
      margin-top: 6px;
    }
  }
`;
