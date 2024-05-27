import "./detail.css";
import { auth } from "../../lib/firebase";

const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" />
        <h2>Pramis</h2>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/public/arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="/public/arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="/public/arrowUp.png" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./nepal.jpeg" />
                <span>photo_2024.png</span>
              </div>
              <img src="./download.png" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./nepal.jpeg" />
                <span>photo_2024.png</span>
              </div>
              <img src="./download.png" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./nepal.jpeg" />
                <span>photo_2024.png</span>
              </div>
              <img src="./download.png" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./nepal.jpeg" />
                <span>photo_2024.png</span>
              </div>
              <img src="./download.png" className="icons" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logOut" onClick={() => auth.signOut()}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Details;
