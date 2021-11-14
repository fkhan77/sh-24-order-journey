import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeading = styled.div`
  font-family: "Playfair Display";
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export function Heading({ text }) {
  return <StyledHeading role="heading">{text}</StyledHeading>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
