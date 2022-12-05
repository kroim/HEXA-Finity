import { HelpIcon, useTooltip, Box, BoxProps, Placement } from "@pancakeswap/uikit";
import styled from "styled-components";

interface Props extends BoxProps {
  text: string | React.ReactNode;
  placement?: Placement;
  size?: string;
  color?: string;
}

const QuestionWrapper = styled.div`
  :hover,
  :focus {
    opacity: 0.7;
  }
`;

export const QuestionHelper: React.FC<React.PropsWithChildren<Props>> = ({
  text,
  placement = "right-end",
  size = "16px",
  color = "textSubtitle",
  ...props
}) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(text, { placement });

  return (
    <Box {...props}>
      {tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef}>
        <HelpIcon color={color} width={size} />
      </QuestionWrapper>
    </Box>
  );
};
