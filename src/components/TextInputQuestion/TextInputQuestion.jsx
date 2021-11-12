import styled from "styled-components";
import PropTypes from "prop-types";

const QuestionContainer = styled.div`
  padding: 1rem;
  width: 95%;
`;
const QuestionTitle = styled.div`
  font-family: "Playfair Display";
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`;
const QuestionLabel = styled.label`
  padding-top: 0.5rem;
  display: block;
  padding-bottom: 0.5rem;
`;
const QuestionInput = styled.input`
  background-color: #2f2f81;
  outline: none;
  border: 1px solid white;
  width: 30%;
  height: 1.5rem;
  color: white;

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
      <QuestionTitle>{title}</QuestionTitle>
      {label && <QuestionLabel>{label}</QuestionLabel>}
      <QuestionInput type="text" />
    </QuestionContainer>
  );
}

TextInputQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

TextInputQuestion.defaultProps = {
  title: "title",
  label: "label",
};
