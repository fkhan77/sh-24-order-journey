import styled from "styled-components";
import { SelectionChip } from "../SelectionChip/SelectionChip";

const QuestionContainer = styled.div`
  padding: 1rem;
  width: 95%;
`;
const QuestionTitle = styled.div`
  font-family: "Playfair Display";
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
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
      <QuestionTitle>{title}</QuestionTitle>
      <SelectionChipContainer>
        {options.map((option) => {
          return <SelectionChip key={option} text={option} />;
        })}
      </SelectionChipContainer>
    </QuestionContainer>
  );
}
