import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export function Label({ text, id }) {
  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  for: PropTypes.string,
};
