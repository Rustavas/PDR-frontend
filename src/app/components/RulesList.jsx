import RuleItem from './RuleItem.jsx';

export const RulesList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <RuleItem key={index} item={item} />
      ))}
    </div>
  );
};

export default RulesList;
