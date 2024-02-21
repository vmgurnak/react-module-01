// Mailbox.jsx;

// Умовний рендеринг

// const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
//     </>
//   );
// };

// Тернарний оператор

// const Mailbox = ({ name, messages }) => {
//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p>
//         {messages.length > 0
//           ? `You have ${messages.length} unread messages`
//           : 'No unread messages'}
//       </p>
//     </div>
//   );
// };

// const Mailbox = ({ name, messages }) => {
//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p>
//         {messages.length > 0
//           ? `You have ${messages.length} unread messages`
//           : 'No unread messages'}
//       </p>
//     </div>
//   );
// };

const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
          {/* <MessageList messages={messages} /> */}
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

export default Mailbox;
