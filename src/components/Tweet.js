import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";

function Tweet( { tweet, name, image, handle, timestamp} ) {
  return (
    <div className="tweet">
      <ProfileImage src={image} />
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} />
          <Message message={tweet} />
          <Actions />
        </div>
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  )
}

export default Tweet;