import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topicData = props.topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      title={topic.title}
      setTopicId={props.setTopicId}
      dark={props.dark}
    />
  ));

  return <div className="top-nav-bar__topic-list">{topicData}</div>;
};

export default TopicList;
