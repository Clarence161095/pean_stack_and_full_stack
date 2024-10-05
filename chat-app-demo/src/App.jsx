import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.scss";

// {
//   "conversations": [
//     {
//       "id": 1,
//       "name": "John and Jane",
//       "iamUserId": 1,
//       "users": [
//         {
//           "id": 1,
//           "userName": "John"
//         },
//         {
//           "id": 2,
//           "userName": "Jane"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "name": "John and Alice",
//       "iamUserId": 1,
//       "userIds": [
//         {
//           "id": 1,
//           "userName": "John"
//         },
//         {
//           "id": 3,
//           "userName": "Alice"
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "name": "John, Jane and Alice",
//       "iamUserId": 1,
//       "userIds": [
//         {
//           "id": 1,
//           "userName": "John"
//         },
//         {
//           "id": 2,
//           "userName": "Jane"
//         },
//         {
//           "id": 3,
//           "userName": "Alice"
//         }
//       ]
//     }
//   ],
//   "messages": [
//     {
//       "id": 1,
//       "conversationId": 1,
//       "sender": 1,
//       "content": "Hello, Jane!"
//     },
//     {
//       "id": 2,
//       "conversationId": 1,
//       "sender": 2,
//       "content": "Hi, John!"
//     },
//     {
//       "id": 3,
//       "conversationId": 2,
//       "sender": 1,
//       "content": "Hello, Alice!"
//     },
//     {
//       "id": 4,
//       "conversationId": 2,
//       "sender": 3,
//       "content": "Hi, John!"
//     },
//     {
//       "id": 5,
//       "conversationId": 3,
//       "sender": 1,
//       "content": "Hello, Jane and Alice!"
//     },
//     {
//       "id": 6,
//       "conversationId": 3,
//       "sender": 2,
//       "content": "Hi, John and Alice!"
//     },
//     {
//       "id": 7,
//       "conversationId": 3,
//       "sender": 3,
//       "content": "Hi, John and Jane!"
//     }
//   ]
// }

const MOCK_USERS_DATA = {
  1: "John",
  2: "Jane",
  3: "Alice",
};

const iamUserId = window.prompt("what is your user id?") || 1;
// set local storage
localStorage.setItem("howAreYouId", iamUserId);
if (!localStorage.getItem("conversationIsUpdateLastTime")) {
  localStorage.setItem("conversationIsUpdateLastTime", Date.now());
}

function App() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const scrollBottomRef = useRef(null);

  const scrollBottom = () => {
    // scroll to 1000000000px
    scrollBottomRef.current.scrollTop = scrollBottomRef.current.scrollHeight + 1000000000;
  };

  useLayoutEffect(() => {
    scrollBottom();
  }, [messages]);

  useEffect(() => {
    fetch("http://localhost:3001/conversations")
      .then((res) => res.json())
      .then((data) => {
        // Sample data:
        // [
        //   {
        //     id: 1,
        //     name: "John and Jane",
        //     users: [
        //       {
        //         id: 1,
        //         userName: "John",
        //       },
        //       {
        //         id: 2,
        //         userName: "Jane",
        //       },
        //     ],
        //   },
        //   {
        //     id: 2,
        //     name: "John and Alice",
        //     userIds: [
        //       {
        //         id: 1,
        //         userName: "John",
        //       },
        //       {
        //         id: 3,
        //         userName: "Alice",
        //       },
        //     ],
        //   },
        //   {
        //     id: 3,
        //     name: "John, Jane and Alice",
        //     userIds: [
        //       {
        //         id: 1,
        //         userName: "John",
        //       },
        //       {
        //         id: 2,
        //         userName: "Jane",
        //       },
        //       {
        //         id: 3,
        //         userName: "Alice",
        //       },
        //     ],
        //   },
        // ]
        setConversations(data);
        setSelectedConversation(data[0]);
        scrollBottom();
      });
    scrollBottom();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      fetch(`http://localhost:3001/messages?conversationId=${selectedConversation.id}`)
        .then((res) => res.json())
        .then((data) => {
          // Sample data:
          // [
          //   {
          //     id: 1,
          //     conversationId: 1,
          //     sender: {
          //       id: 1,
          //       userName: "John",
          //     },
          //     content: "Hello, Jane!",
          //   },
          //   {
          //     id: 2,
          //     conversationId: 1,
          //     sender: {
          //       id: 2,
          //       userName: "Jane",
          //     },
          //     content: "Hi, John!",
          //   },
          // ]
          setMessages(data);
          scrollBottom();
        });
    }

    let timeout = 1000;
    const interval = setInterval(() => {
      fetch(`http://localhost:3001/conversationIsUpdates?conversationId=${selectedConversation.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (String(data[0].lastTime) !== localStorage.getItem("conversationIsUpdateLastTime")) {
            fetch("http://localhost:3001/messages?conversationId=1")
              .then((res) => res.json())
              .then((data) => {
                setMessages(data);
              });
            localStorage.setItem("conversationIsUpdateLastTime", data[0].lastTime);
            scrollBottom();
          }
        });
    }, timeout);

    // Nếu 10s mà người dùng không đụng vào trang thì sẽ set timeout = 10000
    const intervalThrottle = setInterval(() => {
      // Check xem người dùng có đụng vào trang không
      window.addEventListener("mousemove", () => {
        // Nếu có thì set timeout = 1000
        timeout = 1000;
      });
      timeout = 10000;
    }, 300);

    return () => {
      clearInterval(interval);
      clearInterval(intervalThrottle);
    };
  }, [selectedConversation]);

  return (
    <>
      <div className="gap-5 p-2 bg-purple-300 bg-opacity-50 overflow-hidden">
        <h1 className="text-2xl">Facebook Messenger Clone</h1>
        <h2 className="text-lg">Hello, {MOCK_USERS_DATA[iamUserId]}!</h2>
        <div className="flex w-[100vw] h-[90vh] overflow-hidden">
          <div className="w-[30vw] bg-green-300 bg-opacity-[50%]">
            <h1>Conversations</h1>
            <div className="flex flex-col gap-2">
              {conversations.length > 0 &&
                conversations
                  .filter((conversation) => {
                    return conversation.users.some((user) => Number(user.id) === Number(iamUserId));
                  })
                  .map((conversation) => {
                    const { id, name } = conversation;

                    return (
                      <div key={id} className="flex flex-col gap-1">
                        <button
                          className="bg-blue-500 text-white"
                          onClick={() => {
                            setSelectedConversation(conversation);
                          }}
                        >
                          {name}
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="w-[70vw] bg-blue-300 bg-opacity-[50%] overflow-hidden">
            {selectedConversation && (
              <div className="flex flex-col gap-1">
                <h1>Messages Group: {selectedConversation.name}</h1>
              </div>
            )}
            <div
              className="flex flex-col gap-4 mr-5 p-4 h-[80vh] overflow-y-auto"
              id="messageContainer"
              ref={scrollBottomRef}
            >
              {messages.map((message) => {
                const { id, content, sender } = message;
                const isMe = sender.id == iamUserId;

                return (
                  <div key={id} id={id} className={`flex flex-col gap-1 ${isMe ? "items-end" : "items-start"}`}>
                    <div className={`p-2 rounded-lg ${isMe ? "bg-green-500 text-white" : "bg-blue-500 text-white"}`}>
                      {content}
                    </div>
                    <div className="text-xs text-gray-500">{sender.userName}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <input
                type="text"
                className="w-[80%] p-2 rounded-lg"
                placeholder="Type your message here..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    const content = e.target.value;
                    // sample message:
                    // {
                    //   "id": 7,
                    //   "conversationId": 3,
                    //   "sender": {
                    //     "id": 3,
                    //     "userName": "Alice"
                    //   },
                    //   "content": "Hi, John and Jane!"
                    // }
                    const message = {
                      conversationId: selectedConversation.id,
                      sender: {
                        id: iamUserId,
                        userName: MOCK_USERS_DATA[iamUserId],
                      },
                      content,
                    };

                    fetch("http://localhost:3001/messages", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ ...message }),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        setMessages([...messages, data]);
                      });

                    scrollBottom();

                    fetch(`http://localhost:3001/conversationIsUpdates/${selectedConversation.id}`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ lastTime: Date.now() }),
                    });

                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
