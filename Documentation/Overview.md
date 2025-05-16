# 🇳🇬 SmartChat - AI-Powered Nigerian Company Chatbot

SmartChat is a reusable, AI-enhanced chatbot platform designed specifically for Nigerian businesses. It enables companies to automate customer support, generate leads, and provide localized responses (including Nigerian accents and dialects), all through a branded Progressive Web App (PWA) and admin dashboard.

---

## 🚀 Features

### 🔹 Chatbot Capabilities
- Natural Language Processing (NLP)
- Intent recognition and classification
- Real-time chatbot response
- Multi-language + local dialect support (Yoruba, Hausa, Igbo)
- Voice note parsing (STT via Whisper.cpp)
- Natural voice response (TTS via YarnGPT with Nigerian accents)
- Auto-responses based on pre-defined FAQ and product data

### 🔹 Customer Interaction
- Real-time messaging (AJAX)
- Audio message support (record and playback)
- FAQ auto-response
- Lead capture (name, email, phone)
- Ticketing system for complaints/orders
- Notifications via email and push (native/browser)

### 🔹 Admin Features
- Company branding (logo, colors)
- Manage FAQs, products, pricing
- View and export leads
- Ticket management
- Upload company-specific content
- Analytics (optional future feature)

---

## 🧱 Tech Stack

### Frontend
- HTML, CSS, JavaScript (Vanilla + AJAX)(REACT is Allowed)
- PWA support (manifest, service worker)
- MediaRecorder API for voice
- Responsive design via Flexbox/Grid

### Backend
- Python (Flask)
- REST API (Flask Blueprints)
- STT: Whisper.cpp
- TTS: YarnGPT
- NLP/LLM: GPT-4o / OpenRouter APIs (optional fallback)

### Database
- PostgreSQL or MongoDB (multi-tenant schema)
- Embeddings + vector similarity via FAISS / SentenceTransformers

---

## 🗂️ Folder Structure (Frontend)

chatbot-frontend/
├── index.html
├── manifest.json
├── service-worker.js
├── /css/
│ └── styles.css
├── /js/
│ ├── main.js
│ ├── api.js
│ ├── chat.js
│ ├── voice.js
│ ├── lead.js
│ ├── ticket.js
│ └── utils.js
├── /components/
│ ├── ChatBubble.js
│ ├── InputArea.js
│ ├── VoiceButton.js
│ ├── NotificationBanner.js
│ └── TicketForm.js
└── /assets/
└── logo.png

---

## 📦 Folder Structure (Backend)

chatbot-backend/
├── app.py
├── config.py
├── /routes/
│ ├── chat.py
│ ├── lead.py
│ ├── ticket.py
│ ├── admin.py
│ └── notify.py
├── /services/
│ ├── stt_whisper.py
│ ├── tts_yarngpt.py
│ ├── faq_search.py
│ ├── nlp_parser.py
│ └── notifications.py
├── /models/
│ ├── company.py
│ ├── faq.py
│ ├── ticket.py
│ ├── lead.py
│ └── chat.py
└── requirements.txt

---

## 🔄 Chat Flow

1. User lands on PWA.
2. Chat interface requests name/email for lead capture.
3. User sends text or voice message.
4. Backend processes message:
   - Parses intent
   - Searches for relevant FAQ/product content
   - Translates to dialect (if needed)
   - Responds in text and/or audio
5. Lead or ticket is saved to DB.
6. Notifications sent (browser or email).
7. Admin can review leads/tickets via dashboard.

---

## 🔐 Multi-Tenant Support

Each company has:
- Unique ID and branding
- Their own dataset (FAQs, products, leads, tickets)
- Accessible via subdomain or parameter (`chat.domain.com/company-slug`)

---

## 💵 Pricing Model

- ₦29,999/month
- Payment can be integrated via Paystack or Flutterwave

---

## 🗃️ Database Tables Overview

- `companies`: ID, name, logo, color, email, plan
- `faqs`: ID, question, answer, embedding, company_id
- `leads`: ID, name, email, phone, company_id, created_at
- `tickets`: ID, user_id, issue_type, message, status, company_id
- `chats`: ID, user_id, message, intent, reply, timestamp, voice_note_url

---

## 📈 Future Ideas

- Analytics dashboard
- CRM/WhatsApp integration
- Auto-translation of English to Pidgin/Yoruba/Hausa
- Offline mode for lead capture during poor connectivity

---

## 🧪 Deployment & Testing

- Frontend: Host on Vercel
- Backend: Deploy via Railway.app
- Local testing with ngrok or dev domain

---

## ✨ How to Onboard a New Company

1. Company signs up and sets branding info
2. Admin uploads FAQs and content manually or via paste/upload
3. Frontend automatically adopts their branding
4. SmartChat is embedded on their site or hosted on `chat.smartchat.com/{company}`

---

## 🧠 NLP & AI Overview

- GPT-4o / Claude / Mistral for smart generation (optional)
- FAISS + SentenceTransformers for context retrieval (RAG)
- Whisper.cpp for offline STT
- YarnGPT for Nigerian voice accents

---

## ✅ Summary

SmartChat brings modern AI automation to Nigerian businesses using a simple, affordable, and highly localized chatbot. With voice support, dialect response, lead capture, and admin tools, it helps companies improve customer service and grow smarter.

---


