import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "styled-components";

const NavigationBarContainer = styled.div`
  color: orange;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavigationIcon = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  cursor: pointer;
  width: 5.5%;
  user-select: none;
`;

export function NavigationBar({ handleBack, handleNext, isLastStep }) {
  return (
    <NavigationBarContainer>
      <NavigationIcon onClick={() => handleBack()}>
        <ArrowBackIosIcon sx={{ fontSize: `0.8rem` }} /> Back
      </NavigationIcon>
      {!isLastStep && (
        <NavigationIcon onClick={() => handleNext()}>
          Next <ArrowForwardIosIcon sx={{ fontSize: `0.8rem` }} />
        </NavigationIcon>
      )}
    </NavigationBarContainer>
  );
}
