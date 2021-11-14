import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export function Label({ text }) {
  return <StyledLabel>{text}</StyledLabel>;
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
};
