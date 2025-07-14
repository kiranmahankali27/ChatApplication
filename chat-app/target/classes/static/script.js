let stompClient = null;
let name = '';
let userColors = {};

function enterChat() {
    name = document.getElementById("username").value.trim();
    if (!name) return alert("Please enter your name!");

    document.getElementById("login").style.display = "none";
    document.getElementById("chat").style.display = "block";

    const socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
        stompClient.subscribe('/topic/messages', (messageOutput) => {
            const message = JSON.parse(messageOutput.body);
            showMessage(message);
        });
    });
}

function sendMessage() {
    const msg = document.getElementById("message").value.trim();
    if (msg === '') return;

    stompClient.send("/app/send", {}, JSON.stringify({ 'from': name, 'text': msg }));
    document.getElementById("message").value = '';
}

function showMessage(message) {
    const box = document.getElementById("chatbox");

    const isOwnMessage = message.from === name;

    // Assign consistent color to each user
    let colorClass = userColors[message.from];
    if (!colorClass) {
        const colorClasses = ['user-color-1', 'user-color-2', 'user-color-3', 'user-color-4'];
        colorClass = colorClasses[Object.keys(userColors).length % colorClasses.length];
        userColors[message.from] = colorClass;
    }

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${colorClass} ${isOwnMessage ? 'own-message' : 'other-message'}`;
    msgDiv.innerHTML = `<span class="username">${message.from}:</span> ${message.text}`;

    box.appendChild(msgDiv);
    box.scrollTop = box.scrollHeight;
}
