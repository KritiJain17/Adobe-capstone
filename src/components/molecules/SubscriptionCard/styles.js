import styled from "@emotion/styled";
import Box from "../../atoms/box.atom";

export const SubscriptionCardContainer = styled(Box)`
  width: 25rem;
  height: 25rem;
  border: 1px solid black;
  border-radius: 3rem;
  overflow: hidden;
`;

export const SubscriptionCardHeader = styled(Box)`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
  color: white;
`;

export const SubscriptionCardBody = styled(Box)`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
`;
