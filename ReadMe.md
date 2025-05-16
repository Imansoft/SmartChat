# 🤖 SmartChat - AI Chatbot Suite


This repository is organized into four core departments to allow for modular development and easy integration during deployment.

```text
📦 SmartChat
├── AI/             # AI functionality: NLP, STT, TTS (Python)
├── Backend/        # Backend APIs and DB logic (Flask)
├── Frontend/       # UI (React or plain HTML/CSS/JS)
├── Documentation/  # Specs, roles, and planning docs
└── SmartChat/      # Production-ready merged project (compiled from others)
```

---

## 🎯 Project Goal

To provide an AI-powered, easily brandable chatbot suite that businesses can use without requiring a website. The solution supports custom FAQs, lead capturing, voice messages, and NLP-driven auto-responses.

---

## 🧪 Phase 1 - MVP Focus

More details on the MVP can be found in [`Documentation/Phase 1.txt`](Documentation/Phase%201.txt).

---

## 👥 Team Roles

Each developer is responsible for one department. Roles and responsibilities are outlined in:

- [`Documentation/Role.md`](Documentation/Role.md)

**Departments & Leads:**
- 🎨 **Frontend** (React / HTML/CSS/JS): *Mudathir*
- 🛠️ **Backend** (Flask & DB): *Hussein*
- 🧠 **AI** (NLP/STT/TTS): *Musa-Iman*
- 🚀 **SmartChat** (Production Build): *Everyone*

---

## 🚀 Deployment Strategy

- **Frontend**: Deployed via [Vercel](https://vercel.com) (auto-deploy from GitHub)
- **Backend**: Deployed via [Railway](https://railway.app) (auto-deploy from GitHub)
- **Production Merge**: Final tested code is moved into the `SmartChat/` folder for unified deployment

---

## 📄 Documentation

All planning, specs, and responsibilities are documented inside the `Documentation/` folder:

- **Project Overview**: [`Overview.md`](Documentation/Overview.md)
- **MVP Features**: [`Phase 1.txt`](Documentation/Phase%201.txt)
- **Team Roles**: [`Role.md`](Documentation/Role.md)

---

## ✅ Next Steps

1. Finish development of individual modules (Frontend, Backend, AI).
2. Test modules independently.
3. Merge stable builds into `SmartChat/`.
4. Deploy MVP and begin user onboarding.

---
