
# 💬 Chat Application

A **real-time chat application** built using **Java**, **Spring Boot**, **WebSockets**, **HTML**, **CSS**, and **JavaScript**. This application allows multiple users to chat live in a shared room with each user's messages styled uniquely. The app also prompts users to enter their names before entering the chat room.

---

## 🚀 Features

- 🔐 **Username Prompt**: Asks the user for their name before entering the chat.
- 🧠 **Real-time Communication**: Uses WebSockets for seamless two-way communication.
- 🎨 **Dynamic UI**:
  - Each user gets a unique message color.
  - Sent messages appear on the **right**, received messages appear on the **left**.
  - Colorful and responsive chat interface for a better user experience.
- ✅ **Simple and clean design** using HTML, CSS, and JavaScript.
- 💡 Lightweight and easy to deploy Spring Boot backend.

---

## 🛠️ Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| **Backend** | Java, Spring Boot, WebSocket |
| **Frontend**| HTML, CSS, JavaScript |
| **Communication** | STOMP over WebSocket |
| **Build Tool** | Maven / Gradle |
| **IDE** | IntelliJ IDEA / Eclipse |

---

## 📁 Project Structure

```
ChatApplication/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com.chatapp/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       └── config/
│   │   └── resources/
│   │       ├── static/
│   │       │   └── index.html, styles.css, script.js
│   │       └── application.properties
├── pom.xml or build.gradle
└── README.md
```

---

## 🔧 How to Run

### Prerequisites:
- Java 17+
- Maven or Gradle
- A modern web browser

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ChatApplication.git
   cd ChatApplication
   ```

2. **Build and run the backend**:
   ```bash
   ./mvnw spring-boot:run
   ```
   or
   ```bash
   ./gradlew bootRun
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:8080
   ```

4. **Enter your name** and start chatting!

---

## 📸 Screenshots
1.User 1(kiran) joined
<img width="1912" height="1030" alt="image" src="https://github.com/user-attachments/assets/af79fd8e-738a-461c-9bd3-365ccb6d9183" />
2.user 2(vardhan joined)
<img width="1918" height="1034" alt="image" src="https://github.com/user-attachments/assets/91a4c190-65e1-43a0-aa21-da80fc883306" />
3.user 2 screen,sent a message
<img width="1909" height="1030" alt="image" src="https://github.com/user-attachments/assets/c87f5ae6-f602-4071-9276-07d185c6c480" />
4.user 1 received the message of user 2.
<img width="1905" height="1030" alt="image" src="https://github.com/user-attachments/assets/28baa9ac-6310-4371-837a-52f2e1876732" />
5.chat Imeage
<img width="1919" height="1026" alt="image" src="https://github.com/user-attachments/assets/95ab9cab-4d27-456f-98a5-7315b100de57" />

---

## 📚 Learning Concepts

This project demonstrates:
- WebSocket and STOMP message handling in Spring Boot
- Broadcasting messages to all connected clients
- DOM manipulation and dynamic styling using JavaScript
- Real-time frontend/backend interaction

---

## 🙋‍♂️ Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
