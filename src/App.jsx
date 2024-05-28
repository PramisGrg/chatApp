import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import Chat from "./components/chat/Chat";
import Details from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      } else {
        // If no user is logged in, set currentUser to null and isLoading to false
        fetchUserInfo(null);
      }
    });
    return () => {
      unSub;
    };
  }, [fetchUserInfo]);
  console.log(currentUser);
  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Details />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
