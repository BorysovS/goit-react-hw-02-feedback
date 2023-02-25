import { StatisList, ListCount } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisList>
      <li>
        Good:
        <ListCount>{good}</ListCount>
      </li>
      <li>
        Neutral:
        <ListCount>{neutral}</ListCount>
      </li>
      <li>
        Bad:
        <ListCount>{bad}</ListCount>
      </li>
      <li>
        Total:
        <ListCount>{total}</ListCount>
      </li>
      <li>
        Positive feedback:
        <ListCount>{positivePercentage}%</ListCount>
      </li>
    </StatisList>
  );
};
