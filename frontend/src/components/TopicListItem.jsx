import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {
    id,
    title,
    setTopicId
  } = props;
  
  return (
    <div className="topic-list__item">
      <span
        className="topic-list__item"
        onClick={() => {
          setTopicId(id);
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
