import { FeedbackWrap, FeedbackBtn } from './FeedBackOption.styled';
export const FeedBackOptions = ({ options, onClick }) => {
  return (
    <FeedbackWrap>
      {options.map(option => {
        return (
          <FeedbackBtn
            type="button"
            onClick={onClick}
            key={option}
            name={option}
          >
            {option}
          </FeedbackBtn>
        );
      })}
    </FeedbackWrap>
  );
};
