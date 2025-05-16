## 👥 Team Roles & Responsibilities

### 🧑‍💻 Mudathir – Frontend
- Use **React** or **HTML/CSS/JS** to design the frontend.
- Follow the MVP requirements specified in `Documentation/Phase 1.txt`.

---

### 🧑‍💻 Hussein – Backend
- Build the backend using **Python Flask**.
- Handle **authentication** and **page routing**.
- Communicate with Mudathir's frontend:
  - Either embed HTML directly or
  - Use REST API to send data to React frontend.

---

### 🧑‍💻 Musa-Iman – AI
- Integrate AI features:
  - **Natural Language Processing (NLP)**
  - **Retrieval Augmented Generation (RAG)**
  - **Intent Parsing**
- Test and connect with Hussein’s backend via API routes.

---

## ⚙️ Deployment & Integration Workflow (Zero-Config)

### ✅ Frontend: React on Vercel
- Connect to GitHub repo → **Auto-deploy on push**
- Benefits:
  - Free SSL
  - Global CDN
  - Instant deployment
  - Great for PWA interfaces (chatbots)

---

### ✅ Backend: Flask on Railway
- Connect to GitHub repo → **Auto-deploy on push**
- Benefits:
  - Free hosted PostgreSQL database (via plugins)
  - Clean dashboard for logs, builds, and API endpoints

---

### ✅ Database: PostgreSQL on Railway
- Add DB via Railway “Plugins”
- Store connection string in `.env` file
- Flask will read this during runtime

---

## 🔁 Connect Flask ↔ React

### In React:
```javascript
fetch('https://your-backend-url.up.railway.app/api/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: "Hello" })
});
```

---

### In Flask:
```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/send', methods=['POST'])
def send():
    data = request.json
    return jsonify({'reply': f"You said: {data['message']}"})
```

---

> ✅ Auto-deploy from GitHub for both Frontend (Vercel) and Backend (Railway) ensures a seamless production-ready workflow.
