import styled from "styled-components";
import { SelectionChip } from "../SelectionChip/SelectionChip";
import { Heading } from "../Heading/Heading";
import PropTypes from "prop-types";

const QuestionContainer = styled.div`
  padding: 1rem;
  width: 95%;
`;

const SelectionChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
`;

export function MultiOptionQuestion({ title, options }) {
  return (
    <QuestionContainer>
      <Heading text={title} />
      <SelectionChipContainer>
        {options.map((option) => {
          return <SelectionChip key={option} text={option} />;
        })}
      </SelectionChipContainer>
    </QuestionContainer>
  );
}

MultiOptionQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
