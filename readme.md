# 📧 Send Emails Using Gmail SMTP with Nodemailer  

This project allows you to **send emails using Gmail SMTP** via **Node.js** and **Nodemailer**.
It's especially suitable for tasks like **account verification, password reset, or notification emails**.

Bu proje, **Node.js** ve **Nodemailer** kullanarak **Gmail SMTP** üzerinden e-posta göndermeyi sağlar.  
Özellikle **hesap doğrulama, parola sıfırlama ve bildirim e-postaları** gibi işlemler için uygundur.


You can customize the **HTML content** to send any type of email you want.

---

## 📌 Features / Özellikler 

✔️ Send emails via Gmail SMTP / Gmail SMTP kullanarak e-posta gönderme 

✔️ Dynamic emails containing account verification codes / Hesap doğrulama kodu içeren dinamik e-postalar 

✔️ Easy setup and usage / Kolay kurulum ve kullanım 

---

## 🚀 Setup & Usage

### 1️⃣Requirements

 To use this project, make sure you have(Bu projeyi kullanmak için şunlar gereklidir):

-  **[Node.js](https://nodejs.org/)** installed.  
-  The **Nodemailer** package.  
-  **[Google App Password](https://myaccount.google.com/apppasswords) for using Gmail SMTP**.  

---

### 2️⃣How to Get a Google App Password: 
> **📌 Note:** Gmail regular passwords do not work with SMTP. You need to generate an **App Password**.

1. Go to [Google Account Settings](https://myaccount.google.com/) .  
2. Click the **Security / Güvenlik** tab.  
3. Enable **"two-Step Verification" / "İki Adımlı Doğrulama"**.  
4. Go to the **"App Passwords" / "Uygulama Şifreleri"** section.  
5. Under **"Select app" / "Uygulama Seç"**, choose **Mail**.  and under **Select device / Cihaz Seç** , choose **Windows Bilgisayar** or **Mac**.  
6. Click **"Generate" / "Oluştur"** to receive a **16-character password**.  
7. This password will be used in your **`.env`** file.  

---

### 3️⃣Clone the Project and Install Dependencies:

```sh
git clone https://github.com/can-kayan/Nodemailler
```
```sh
cd nodemailler
```
```sh
npm install
```

### 4️⃣Set Up Environment Variables ".env":  
Create a file named **`.env`** in the root directory and add the following / 
Proje dizininde **`.env`** adında bir dosya oluştur ve aşağıdaki bilgileri ekle:  

```sh
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```
### 5️⃣Run the Project:

Open the terminal and run:  

```sh
node index.js
```
