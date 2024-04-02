import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./bot/config.js";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";

const Chat = () => {
  return (
    <div className="fixed bottom-10 right-10  overflow-hidden rounded-3xl shadow-md">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Chat;
