import { BaseButtonProps, Button, ButtonMenuItemProps } from "@pancakeswap/uikit";
import { PolymorphicComponent } from "@pancakeswap/uikit/src/util/polymorphic";
import styled from "styled-components";
// import { PolymorphicComponent } from "../../util/polymorphic";
// import Button from "../Button/Button";
// import { BaseButtonProps, variants } from "../Button/types";
// import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: #FFF;
  height: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #000;
  border-radius: 0px;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
    color: #000;
  }
  padding: 9px;
  padding-left: 11px;
  padding-right: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 11px;
    padding-left: 12px;
    padding-right: 12px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 12px;
    padding-left: 14px;
    padding-right: 14px;
  }
`;

interface ActiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const ActiveButton: PolymorphicComponent<ActiveButtonProps, "button"> = styled(Button)<ActiveButtonProps>`
  background-color: #2F4DA0;
  height: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  border-radius: 0px;
  &:hover:not(:disabled):not(:active) {
    color: #DDDDDD;
  }
  padding: 9px;
  padding-left: 11px;
  padding-right: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 11px;
    padding-left: 12px;
    padding-right: 12px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 12px;
    padding-left: 14px;
    padding-right: 14px;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = "tertiary",
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <ActiveButton forwardedAs={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
