import styled from "styled-components";
import PropTypes from "prop-types";

const ResultsContainer = styled.div`
  background-color: white;
  padding: 1rem;
  width 80%;
  color: blue;

`;
const Result = styled.div`
  color: blue;
`;

export function Results({ results }) {
  return (
    <ResultsContainer>
      Results
      {results.map((result) => {
        return (
          <Result
            key={result.question}
          >{`${result.question}: ${result.answer}`}</Result>
        );
      })}
    </ResultsContainer>
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
