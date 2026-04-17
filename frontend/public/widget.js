(function () {
  const scriptTag = document.currentScript;
  if (!scriptTag) return;

  const botId = scriptTag.getAttribute("bot-id");
  if (!botId) {
    console.error("Chat widget: bot-id attribute missing.");
    return;
  }

  const BASE_URL = "https://your-backend-domain.com"; // 🔥 change after deploy

  function createWidget() {
    // 💬 Floating Button
    const button = document.createElement("button");
    button.innerText = "💬";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.width = "60px";
    button.style.height = "60px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.background = "#6c47ff";
    button.style.color = "white";
    button.style.fontSize = "24px";
    button.style.cursor = "pointer";
    button.style.zIndex = "999999";
    button.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";

    // 📦 Chat Container
    const iframe = document.createElement("iframe");
    iframe.src = `${BASE_URL}/chat/${botId}`;
    iframe.style.position = "fixed";
    iframe.style.bottom = "90px";
    iframe.style.right = "20px";
    iframe.style.width = "350px";
    iframe.style.height = "500px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "12px";
    iframe.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
    iframe.style.display = "none";
    iframe.style.zIndex = "999999";

    // 🔒 Security (important)
    iframe.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-forms allow-popups"
    );

    // Toggle logic
    button.onclick = () => {
      iframe.style.display =
        iframe.style.display === "none" ? "block" : "none";
    };

    // 📱 Mobile responsiveness
    if (window.innerWidth < 500) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.bottom = "0";
      iframe.style.right = "0";
      iframe.style.borderRadius = "0";
    }

    document.body.appendChild(button);
    document.body.appendChild(iframe);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget);
  } else {
    createWidget();
  }
})();