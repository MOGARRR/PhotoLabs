import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
const topicData = props.topics.map((topic) => (
  <TopicListItem
  key={topic.id}
  title={topic.title}
  />
))

  return (
    <div className="top-nav-bar__topic-list">
      {topicData}
    </div>
  );
};

export default TopicList;
