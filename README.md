# 🌐 Quick Commerce CRM Admin Dashboard — Prototype  
_A modern, clean, minimalistic admin dashboard prototype inspired by platforms like Blinkit & Instamart._

<p align="center">
  <img src="https://img.shields.io/badge/Status-Prototype-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-06B6D4?style=flat-square" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-RTK-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/ShadCN-UI-000000?style=flat-square" />
  <img src="https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square" />
</p>

---

## 📸 Screenshots  
> *(Replace these placeholders with your actual project screenshots.)*

### 🔐 Login Page  
![Login](/screenshots/login.png)

### 🧑‍💼 Super Admin Dashboard  
![Dashboard](/screenshots/super-admin-dashboard.png)

### 📝 Create Admin (Form UI)  
![Create Admin](/screenshots/create-admin.png)

---

# 📘 About the Project

This repository contains a **prototype demo** of a modern Quick Commerce CRM Admin Dashboard.  
It demonstrates the **planned user experience, role flow, and UI structure** for a real production-ready admin system.

⚠️ **Important:**  
This version uses **dummy authentication logic**, **mock admin data**, and **localStorage** for temporary persistence.  
No real backend, secure authentication, or database is implemented yet.

The goal of this prototype is to provide a **visual and functional preview** for clients, senior developers, and stakeholders before building the final production version.

---

# 🧠 Key Features (Prototype Version)

### ✔ Universal Login Page
- Clean, modern, minimalistic UI  
- Email + password fields  
- Dummy auth using Redux + localStorage  
- Role-based redirect logic  
- Smooth transitions with Framer Motion  

### ✔ Super Admin Dashboard
- Sidebar navigation  
- Modern cards & dummy analytics  
- Profile dropdown  
- Light, clean layout with consistent spacing  
- Fully responsive  

### ✔ Form-Based Admin Registration (Super Admin Only)
- Create mock admins  
- Auto-generate temporary password  
- Role dropdown  
- Toast notifications  
- Validations using ShadCN UI components  

### ✔ Temporary Password → Reset Password Flow
- New admins must reset temp password on first login  
- After resetting → redirect to their role-specific dashboard  

### ✔ Role-Based UI Logic
- Super Admin has full access  
- Other admins have limited dashboards  
- Restricted pages hidden from non-super roles  
- Basic frontend route protection  

### ✔ Redux Toolkit + LocalStorage
- `authSlice.ts` handles login/logout state  
- `adminSlice.ts` maintains mock admin list  
- Persisted state using localStorage  
- Simple RBAC simulation  

---

# 🛠 Tech Stack

| Category | Technology |
|---------|------------|
| Framework | **Next.js 14 (App Router)** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| UI Library | **ShadCN UI** |
| Animations | **Framer Motion** |
| State Management | **Redux Toolkit (RTK)** |
| Storage | **localStorage (Prototype Only)** |
| Icons | **Lucide Icons** |

---

# 💡 How the Prototype Works (Human-Friendly Explanation)

The system begins with a single **Universal Login Page** shared by all admin roles.  
When a Super Admin logs in, they can access the **Create Admin** page and generate mock admin accounts with a temporary password.  
This password is used by new admins to log in for the first time.  
The prototype detects temporary credentials and automatically redirects them to a **Reset Password** page.  
Once the new password is set, they are taken to their **role-specific dashboard**, where access is limited based on their assigned role.

All of this is achieved using **mock logic inside Redux**, not a real backend.  
This prototype is intended to show the **visual flow and planned behavior** of the final system.

---

# ⚠️ Prototype Limitations

This is NOT a production-ready system.  
The following features are **NOT implemented**:

- Secure authentication  
- Password hashing/encryption  
- Database support  
- Real RBAC enforcement  
- Email services  
- API integration  
- Backend server  
- Activity logs or analytics  

Everything here is **UI + mock state logic** only.

---

# 🔮 Planned Production Features (Next Phase)

- Fully secure backend (Node.js + PostgreSQL / Appwrite)  
- JWT/Session authentication  
- Real admin database  
- Secure password hashing & reset flow  
- Role-based access control (RBAC) backend middleware  
- Store, Inventory, Orders, Payments modules  
- Admin auditing and logging  
- Email service for sending temporary passwords  
- Real analytics dashboard

