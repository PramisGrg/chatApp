import Adduser from "./addUser/Adduser";
import "./chatlist.css";
import { useState } from "react";

const Chatlist = () => {
  const [add, setAdd] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="/public/search.png" />
          <input placeholder="search user" type="text"></input>
        </div>
        <img
          src={add ? "/public/minus.png" : "/public/plus.png"}
          className="add"
          onClick={() => {
            setAdd((prev) => !prev);
          }}
        />
      </div>
      <div className="item">
        <img src="/public/avatar.png" />
        <div className="text">
          <span>Nicha</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/public/avatar.png" />
        <div className="text">
          <span>Nicha</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/public/avatar.png" />
        <div className="text">
          <span>Nicha</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/public/avatar.png" />
        <div className="text">
          <span>Nicha</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/public/avatar.png" />
        <div className="text">
          <span>Nicha</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/public/avatar.png" />
        <div className="text">
          <span>Nicha</span>
          <p>Hello</p>
        </div>
      </div>
      {add && <Adduser />}
    </div>
  );
};

export default Chatlist;
