import styled from "styled-components";
import PropTypes from "prop-types";

const StyledChip = styled.div`
  background-color: blue;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: blue;
  }
`;

export function SelectionChip({ text }) {
  return <StyledChip>{text}</StyledChip>;
}

SelectionChip.propTypes = {
  text: PropTypes.string.isRequired,
};
