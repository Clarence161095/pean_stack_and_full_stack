'use strict'

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'button',
        { onClick: () => this.setState({ liked: false }) },
        'Unlike'
      );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Define a ChatBubble component
class ChatBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleChat = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      e('div', null,
        e('div',
          {
            className: "bubble-icon",
            id: "bubble-icon",
            onClick: this.toggleChat
          },
          e('svg',
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "36",
              height: "36",
              viewBox: "0 0 24 24"
            },
            e('path',
              {
                d: "M0 0h24v24H0z",
                fill: "none"
              }
            ),
            e('path',
              {
                fill: "white",
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm3-4H9v-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1z"
              }
            )
          )
        ),
        this.state.isOpen && (
          e('div', { className: "chat-form" },
            e('h2', null, 'Chat with Robot'),
            e('div', { className: "message-container" },
              e('div', { className: "message user-message" }, 'Hello, Robot!'),
              e('div', { className: "message robot-message" }, 'Hi there! How can I assist you today?')
            ),
            e('div', { className: "input-container" },
              e('input', { type: "text", placeholder: "Type your message" }),
              e('button', null, 'Send')
            ),
            e('button', { className: "voice-chat-button" }, 'Voice Chat')
          )
        )
      )
    );
  }
}

ReactDOM.createRoot(document.querySelector('#like_button_container')).render(e(LikeButton));
ReactDOM.createRoot(document.querySelector('#unlike_button_container')).render(e(LikeButton));
ReactDOM.createRoot(document.querySelector('#bubble-icon')).render(e(ChatBubble));
