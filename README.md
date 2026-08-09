# 🧭 North Star Support Bot

This project is a customer support chatbot built for an outdoor e-commerce business. It handles order tracking, returns, product recommendations, and live agent support.

---

## 🚀 Features

- Order Tracking (111, 222, 333)
- Returns & Exchanges
- Product Recommendations
- Human Agent Handoff
- Fallback Handling
- Custom Chat UI

---

## 🧠 Tech Stack

- n8n (Workflow Automation)
- Webhook API
- HTML, CSS, JavaScript (Frontend UI)

---

## 🔗 How It Works

1. User sends message from UI
2. Request goes to n8n webhook
3. Switch nodes detect intent
4. Response is generated and returned

---

## 🧪 Test Cases

### Order Tracking
- Input: `111`
- Output: Shipped, arriving tomorrow

- Input: `222`
- Output: Processing, ships in 24 hours

- Input: `333`
- Output: Delivered

- Input: `999`
- Output: Invalid order ID

---

### Returns
- 30-day return policy
- Items must be unused
- Original packaging required

---

### Shipping
- Standard: 3–5 days
- Expedited: 1–2 days

---

### Recommendations
- Based on user input (e.g., hiking, winter gear)

---

### Agent Handoff
- User can request live agent

---

## 📦 Setup (Optional)

1. Import `workflow.json` into n8n
2. Start n8n server
3. Open `index.html`
4. Start chatting


---

## ✅ Requirements Covered

✔ All 4 use cases  
✔ Exact order logic  
✔ Intent handling  
✔ Fallback  
✔ Fully testable  
