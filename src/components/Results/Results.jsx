import styled from "styled-components";
import PropTypes from "prop-types";
import { Heading } from "../Heading/Heading";

const ResultsContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.secondary};
   width 90%;
  color: ${(props) => props.theme.secondary};
`;
const Result = styled.div`
  color: ${(props) => props.theme.secondary};
`;

export function Results({ results }) {
  return (
    <>
      <ResultsContainer>
        <Heading text="Results" />
        {results.map((result) => {
          return (
            <Result
              key={result.question}
            >{`${result.question}: ${result.answer}`}</Result>
          );
        })}
      </ResultsContainer>
    </>
  );
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.any.isRequired,
    })
  ),
};
