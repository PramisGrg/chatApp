import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" />
          <div className="text">
            <span>Pramis</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" />
          <img src="/video.png" />
          <img src="/info.png" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              neque odit at illum omnis, ab animi voluptatem, natus repudiandae
              numquam cupiditate ipsum labore, incidunt voluptas molestiae magni
              saepe quis! Quos iure, temporibus dolorem saepe provident
              mollitia. Voluptatibus delectus nesciunt ipsam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              neque odit at illum omnis, ab animi voluptatem, natus repudiandae
              numquam cupiditate ipsum labore, incidunt voluptas molestiae magni
              saepe quis! Quos iure, temporibus dolorem saepe provident
              mollitia. Voluptatibus delectus nesciunt ipsam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              neque odit at illum omnis, ab animi voluptatem, natus repudiandae
              numquam cupiditate ipsum labore, incidunt voluptas molestiae magni
              saepe quis! Quos iure, temporibus dolorem saepe provident
              mollitia. Voluptatibus delectus nesciunt ipsam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              neque odit at illum omnis, ab animi voluptatem, natus repudiandae
              numquam cupiditate ipsum labore, incidunt voluptas molestiae magni
              saepe quis! Quos iure, temporibus dolorem saepe provident
              mollitia. Voluptatibus delectus nesciunt ipsam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" />
          <img src="/camera.png" />
          <img src="/mic.png" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img src="/emoji.png" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
