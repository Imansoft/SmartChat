# 🧠 SmartChat Git Workflow & Project Structure

## 📁 Frontend Structure

The `SmartChat/Frontend/` directory contains a **mockup of the front-end design** which can be used to guide actual front-end development (ReactJS or plain HTML/CSS/JS).

---

## 🚀 How to Handle the Project Using Git

A step-by-step Git workflow for collaborative development.

---

### ✅ Step 1: Setup the Git Repo (Only once by team lead)

```bash
# In root folder (SmartChat)
git init
git remote add origin https://github.com/lamdan/SmartChat.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

### ✅ Step 2: Clone the Repo (Each developer)

```bash
git clone https://github.com/lamdan/SmartChat.git
cd SmartChat
```

---

### ✅ Step 3: Create a Branch for Your Role

Each developer should create and work in their **own branch**, e.g., `frontend`, `backend`, `ai`, `docs`.

```bash
git checkout -b frontend  # creates and switches to "frontend" branch
```

> - `checkout` = switch branch  
> - `-b` = create a new branch  

---

### ✅ Step 4: Regular Git Workflow (for Each Dev)

Make changes → Commit → Push:

```bash
# Check current branch
git branch

# See changes
git status

# Stage changes
git add .

# Commit with a message
git commit -m "Added chatbot UI"

# Push your branch to GitHub
git push -u origin frontend
```

---

### ✅ Step 5: Pull Changes (Before Starting New Work)

Always pull the latest from your branch before starting:

```bash
git pull origin frontend
```

---

### ✅ Step 6: Merging to `main` (Team lead only or via PR)

Once a branch is tested and ready, it can be merged into `main`:

```bash
# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Merge the branch (e.g., frontend)
git merge frontend

# Push updated main
git push origin main
```

> ✅ Or better: open a **Pull Request (PR)** on GitHub and review changes before merging.

---

## 🧠 Best Practices

| Rule                       | Why                                |
|----------------------------|-------------------------------------|
| One branch per dev/feature | Avoid conflicts and mixups         |
| Pull before pushing        | Stay up to date                    |
| Commit often               | Easier to track and debug history  |
| Use clear messages         | E.g., `feat: add chatbot UI`, `fix: bug in TTS` |
| Never work directly on `main` | Keep `main` stable for production  |

---

## 🔧 Sample Branching Plan for Your Project

| Branch Name | Purpose                                      |
|-------------|----------------------------------------------|
| `frontend`  | Mudathir's React or HTML work                |
| `backend`   | Hussein’s Flask backend                      |
| `ai`        | Musa-Iman’s AI engine (NLP/STT/TTS)          |
| `main`      | Stable, production-ready merged project      |
| `docs`      | Documentation, ReadMe, planning notes, etc.  |

---
