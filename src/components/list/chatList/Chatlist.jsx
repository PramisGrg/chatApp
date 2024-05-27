import Adduser from "./addUser/Adduser";
import "./chatlist.css";
import { useUserStore } from "../../../lib/userStore";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const Chatlist = () => {
  const [add, setAdd] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userdocRef = doc(db, "users", item.receiverId);
          const userdocSnap = await getDoc(userdocRef);

          const user = userdocSnap.data();

          return { ...item, user };
        });
        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  console.log(chats);

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
      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src={chat.user.avatar || "./avatar.png"} />
          <div className="text">
            <span>{chat.user.username}</span>
            <p>{chat.lastmessage}</p>
          </div>
        </div>
      ))}

      {add && <Adduser />}
    </div>
  );
};

export default Chatlist;
