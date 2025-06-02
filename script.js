const socket = new WebSocket('ws://localhost:8080');

const messagesDiv = document.getElementById("messages");

socket.onmessage = (event) => {
  const msg = document.createElement("div");
  msg.textContent = event.data;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!username || !message) return;

  const fullMessage = `${username}: ${message}`;
  socket.send(fullMessage);

  const msg = document.createElement("div");
  msg.textContent = fullMessage;
  msg.style.fontWeight = "bold";
  messagesDiv.appendChild(msg);

  document.getElementById("message").value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}