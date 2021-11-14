import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNavigationButton = styled.span`
  color: ${(props) =>
    props.isError ? props.theme.error : props.theme.navigation};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  cursor: pointer;
  pointer-events: ${(props) => (props.isError ? "none" : "auto")};
  user-select: none;
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export function NavigationButton({ handleClick, isNext, isError }) {
  return (
    <StyledNavigationButton
      role="button"
      onClick={handleClick}
      isError={isError}
    >
      {isNext ? (
        <>
          Next{" "}
          <ArrowForwardIosIcon
            sx={{ fontSize: `0.8rem`, marginLeft: "1rem" }}
          />
        </>
      ) : (
        <>
          <ArrowBackIosIcon sx={{ fontSize: `0.8rem`, marginRight: "1rem" }} />{" "}
          Back
        </>
      )}
    </StyledNavigationButton>
  );
}

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isNext: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
};
