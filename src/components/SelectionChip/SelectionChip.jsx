import styled from "styled-components";
import PropTypes from "prop-types";

const StyledChip = styled.div`
  background-color: ${(props) =>
    props.selected ? props.theme.secondary : props.theme.tertiary};
  color: ${(props) =>
    props.selected ? props.theme.tertiary : props.theme.secondary};
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.tertiary};
  }
`;

export function SelectionChip({ text, selected, handleClick }) {
  return (
    <StyledChip role="radio" selected={selected} onClick={handleClick}>
      {text}
    </StyledChip>
  );
}

SelectionChip.propTypes = {
  text: PropTypes.string.isRequired,
};
