import styled from "styled-components";
import PropTypes from "prop-types";

const StyledChip = styled.div`
  background-color: ${(props) => props.theme.tertiary};
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.tertiary};
  }
`;

export function SelectionChip({ text }) {
  return <StyledChip>{text}</StyledChip>;
}

SelectionChip.propTypes = {
  text: PropTypes.string.isRequired,
};
