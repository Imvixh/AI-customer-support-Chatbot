const webhookURL = "http://localhost:5678/webhook/chatbot";

function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");

  msg.classList.add("message", sender);
  msg.innerText = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// typing effect (better UX)
function typeMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");

  msg.classList.add("message", "bot");
  chatBox.appendChild(msg);

  let i = 0;
  const interval = setInterval(() => {
    msg.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 15);

  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("message");
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    typeMessage(data.reply || "No response");

  } catch (error) {
    typeMessage("Connection error");
  }
}

// ENTER KEY SUPPORT
document.getElementById("message").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// ONE-TIME WELCOME MESSAGE
window.onload = () => {
  if (!localStorage.getItem("welcomeShown")) {
    setTimeout(() => {
      typeMessage("How can I help you?");
    }, 500);

    localStorage.setItem("welcomeShown", "true");
  }
};