import "./userinfo.css";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userinfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} />
        <p>{currentUser.username}</p>
      </div>
      <div className="icons">
        <img src="./more.png" />
        <img src="./video.png" />
        <img src="./edit.png" />
      </div>
    </div>
  );
};

export default Userinfo;
