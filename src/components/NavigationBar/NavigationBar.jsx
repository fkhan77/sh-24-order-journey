import styled from "styled-components";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import PropTypes from "prop-types";

const NavigationBarContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function NavigationBar({
  handleBack,
  handleNext,
  isFirstStep,
  isLastStep,
}) {
  return (
    <>
      <NavigationBarContainer>
        {!isFirstStep ? (
          <NavigationButton onClick={handleBack} isNext={false} />
        ) : (
          <div></div>
        )}
        {!isLastStep ? (
          <NavigationButton onClick={handleNext} isNext={true} />
        ) : (
          <div></div>
        )}
      </NavigationBarContainer>
    </>
  );
}

NavigationBar.propTypes = {
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  isFirstStep: PropTypes.bool,
  isLastStep: PropTypes.bool,
};
