import styled from "styled-components";
import PropTypes from "prop-types";
import { Heading, Label } from "../";

const QuestionContainer = styled.div`
  margin: 1rem;
  width: 95%;
`;
const QuestionInput = styled.input`
  background-color: ${(props) => props.theme.primary};
  outline: none;
  border: 1px solid
    ${(props) => (props.isError ? props.theme.error : props.theme.secondary)};
  width: 30%;
  height: 1.5rem;
  color: ${(props) => props.theme.secondary};
  padding-left: 1rem;
  margin-bottom: 0.5rem;
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
const ErrorMessage = styled.div`
  color: ${(props) => props.theme.error};
`;

export function TextInputQuestion({
  title,
  label,
  id,
  value,
  handleChange,
  handleBlur,
  isError,
  errorMessage,
}) {
  return (
    <QuestionContainer>
      <Heading text={title} />
      <Label text={label} id={id} />
      <QuestionInput
        type="text"
        data-testid="text-input"
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        isError={isError}
      />
      {isError && (
        <ErrorMessage data-testid="error">{errorMessage}</ErrorMessage>
      )}
    </QuestionContainer>
  );
}

TextInputQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
