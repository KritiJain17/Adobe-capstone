import styled from "@emotion/styled";
import Box from "../../atoms/box.atom";

export const CheckoutPage = styled(Box)``;

export const CheckoutPageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutPageHeader = styled(Box)`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  background-color: #2266dd;
   border-bottom: 2px solid black;
`;

export const CheckoutBox = styled(Box)`
  width: 35rem;
  height: max-content;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 4rem;
`;

export const CheckoutBoxTile = styled(Box)`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid black;
    &:last-child {
    border-bottom: none;
  }
`;

export const TileTitle = styled(Box)`
  width: 23rem;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-right: 2px solid black;
`;

export const TileValue = styled(Box)`
  width: 12rem;
  height: 20rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
