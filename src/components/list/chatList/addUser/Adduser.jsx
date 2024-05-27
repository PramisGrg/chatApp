import { useState } from "react";
import { db } from "../../../../lib/firebase";
import "./adduser.css";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useUserStore } from "../../../../lib/userStore";

const Adduser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const username = formdata.get("username");

    try {
      // Create a reference to the users collection
      const userRef = collection(db, "users");

      // Create a query against the collection
      const q = query(userRef, where("username", "==", username));

      const querySnapshot = await getDocs(q);
      console.log("Query Snapshot:", querySnapshot);

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      } else {
        setUser(null); // Reset user if no user found
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");

    const userChatRef = collection(db, "userchats");
    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastmessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastmessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });

      console.log(newChatRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="User Avatar" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default Adduser;
