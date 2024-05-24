import "./userinfo.css";

const Userinfo = () => {
  return (
    <div className="userinfo">
      <div className="user">
        <img src="/public/avatar.png" />
        <p>Pramis</p>
      </div>
      <div className="icons">
        <img src="/public/more.png" />
        <img src="/public/video.png" />
        <img src="/public/edit.png" />
      </div>
    </div>
  );
};

export default Userinfo;
