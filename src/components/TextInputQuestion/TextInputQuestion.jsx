import styled from "styled-components";
import PropTypes from "prop-types";
import { Heading } from "../Heading/Heading";

const QuestionContainer = styled.div`
  padding: 1rem;
  width: 95%;
`;
const QuestionLabel = styled.label`
  display: block;
  padding-bottom: 0.5rem;
`;
const QuestionInput = styled.input`
  background-color: ${(props) => props.theme.primary};
  outline: none;
  border: 1px solid ${(props) => props.theme.secondary};
  width: 30%;
  height: 1.5rem;
  color: ${(props) => props.theme.secondary};
  padding-left: 1rem;
  /* Large devices (Laptops, 1440px and down) */
  @media only screen and (max-width: 1440px) {
    width: 40%;
  }
  /* Medium devices (landscape tablets, 768px and down) */
  @media only screen and (max-width: 768px) {
    width: 50%;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;

export function TextInputQuestion({ title, label }) {
  return (
    <QuestionContainer>
      <Heading text={title} />
      {label && <QuestionLabel>{label}</QuestionLabel>}
      <QuestionInput type="text" />
    </QuestionContainer>
  );
}

TextInputQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
