import "./chatlist.css";

const Chatlist = () => {
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="/public/search.png" />
          <input placeholder="search user" type="text"></input>
        </div>
        <img src="/public/plus.png" className="add" />
      </div>
    </div>
  );
};

export default Chatlist;
