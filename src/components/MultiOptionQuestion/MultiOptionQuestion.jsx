import styled from "styled-components";
import { useState } from "react";
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

export function MultiOptionQuestion({
  title,
  options,
  handleClick,
  id,
  value,
}) {
  const [selected, setSelected] = useState(value);
  return (
    <QuestionContainer>
      <Heading text={title} />
      <SelectionChipContainer>
        {options.map((option) => {
          return (
            <SelectionChip
              key={option}
              text={option}
              selected={selected === option}
              handleClick={() => {
                handleClick(id, option);
                setSelected(option);
              }}
            />
          );
        })}
      </SelectionChipContainer>
    </QuestionContainer>
  );
}

MultiOptionQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
};
