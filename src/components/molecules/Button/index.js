import React from "react";
import { ButtonContainer, ButtonIconContainer } from "./styles.button";

export const Button = ({
  buttonTitle = "",
  disabled = false,
  type = "",
  width = "",
  height = "",
  bgColor = "",
  border = "",
  borderRadius = "5px",
  color = "",
  padding = "",
  margin = "",
  buttonIcon = "",
  iconHeight = "",
  fontSize = "",
  boxShadow = "",
  handleButtonClick = () => void 0,
  hoverBgColor = "",
  isLoading = false,
}) => {
  return (
    <ButtonContainer
      height={height}
      width={width}
      border={border}
      borderRadius={borderRadius}
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      boxShadow={boxShadow}
      onClick={!(disabled || isLoading) ? handleButtonClick : () => void 0}
      justifyContent={buttonIcon ? "space-around" : "center"}
      fontSize={fontSize}
      hoverBgColor={hoverBgColor}
      isLoading={isLoading}
    >
      {buttonIcon && (
        <ButtonIconContainer src={buttonIcon} height={iconHeight} />
      )}
      {buttonTitle}
    </ButtonContainer>
  );
};

//export const buttonTpes = {
//     PRIMARY: "Primary",
//     OUTLINE: "",

// }
