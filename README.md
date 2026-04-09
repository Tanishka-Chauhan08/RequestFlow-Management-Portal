# 🛠️ RequestFlow | Service Request Management Portal

**RequestFlow** is a robust and responsive ticket management system designed to streamline internal operations. It allows users to create, track, and manage service requests with real-time updates and an intuitive user interface.

---

## 🚀 Key Features

- **Dynamic Ticket Lifecycle**: Create new tickets with titles and priorities. Easily toggle status between "Open" and "Closed".
- **Intelligent Filtering**: Real-time search by title and filtering by priority levels (High, Medium, Low).
- **Professional Action Guards**: Integrated confirmation dialogs for destructive actions (Delete/Close) to prevent accidental data loss.
- **AI-Ready Architecture**: Clean code structure designed for future AI insights integration.
- **Fully Responsive UI**: Mobile-first design with a standardized table layout and horizontal scroll support for seamless management on any device.
- **Performance Optimized**: Uses Event Delegation and Debouncing for high-speed interactions.

---

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3 (Flexbox & Grid), JavaScript (ES6+)
- **State Management**: Client-side state handling for real-time filtering.
- **Architecture**: Modular JavaScript (Separate files for Logic, UI, and State).

---

## 📂 Project Structure

```text
service-portal/
├── index.html    # Main dashboard structure
├── style.css     # Responsive styling & mobile-first media queries
├── app.js        # Core logic & event listeners
├── ui.js         # DOM manipulation & rendering logic
└── store.js      # Data management & CRUD operations
