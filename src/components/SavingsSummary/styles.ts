import styled from 'styled-components';
import { colors } from 'styles/variables';

export const SummaryContainer = styled.div`
  border: 1px solid ${colors.LIGHT_GRAY};
  border-radius: 4px;
  width: 100%;
`;

interface SummaryContentProps {
  bgColor?: string;
}

export const SummaryContent = styled.div<SummaryContentProps>`
  width: 100%;
  padding: 27px 24px 24px;
  box-sizing: border-box;

  background-color: ${(props) => props.bgColor ?? ''};
`;

export const Summary = styled.div`
  background-color: ${colors.BLUE_GRAY_10};
`;
