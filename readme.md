# 📧 Send Emails Using Gmail SMTP with Nodemailer / Nodemailer ile Gmail SMTP Kullanarak E-Posta Gönderme 

This project allows you to **send emails using Gmail SMTP** via **Node.js** and **Nodemailer**.
It's especially suitable for tasks like **account verification, password reset, or notification emails**.
You can customize the **HTML content** to send any type of email you want.

Bu proje, **Node.js** ve **Nodemailer** kullanarak **Gmail SMTP** üzerinden e-posta göndermeyi sağlar.  
Özellikle **hesap doğrulama, parola sıfırlama ve bildirim e-postaları** gibi işlemler için uygundur.  
**Html kısmını özelleştirerek** istediğiniz türde mail gönderebilirsiniz.
---

## 📌 Features / Özellikler 

✔️ Send emails via Gmail SMTP / Gmail SMTP kullanarak e-posta gönderme 
✔️ Dynamic emails containing account verification codes / Hesap doğrulama kodu içeren dinamik e-postalar 
✔️ Easy setup and usage / Kolay kurulum ve kullanım 

---

## 🚀 Setup & Usage / Kurulum & Kullanım 

### 1️⃣Requirements / Gereksinimler 

 To use this project, make sure you have / Bu projeyi kullanmak için şunlar gereklidir:

- **[Node.js](https://nodejs.org/)** yüklü olmalıdır / **[Node.js](https://nodejs.org/)** installed.  
- **Nodemailer** kütüphanesi gereklidir / The **Nodemailer** package.  
- **Gmail SMTP kullanımı için [Google Uygulama Şifresi](https://myaccount.google.com/apppasswords)** alınmalıdır / **[Google Uygulama Şifresi](https://myaccount.google.com/apppasswords) for using Gmail SMTP**.  

---

### 2️⃣How to Get a Google App Password / Google Uygulama Şifresi Alma Adımları:
> **📌 Not:** Gmail'in standart şifreleri SMTP ile çalışmaz. Bu yüzden **Uygulama Şifresi** almanız gerekmektedir.  
> **📌 Note:** Gmail regular passwords do not work with SMTP. You need to generate an **App Password**.

1. Go to [Google Hesap Ayarları](https://myaccount.google.com/) .  
2. Click the **Security / Güvenlik** tab.  
3. Enable **"two-Step Verification" / "İki Adımlı Doğrulama"**.  
4. Go to the **"App Passwords" / "Uygulama Şifreleri"** section.  
5. Under **"Select app" / "Uygulama Seç"**, choose **Mail**.  and under **Select device / Cihaz Seç** , choose **Windows Bilgisayar** or **Mac**.  
6. Click **"Generate" / "Oluştur"** to receive a **16-character password**.  
7. This password will be used in your **`.env`** file.  

---

### 3️⃣Clone the Project and Install Dependencies / Projeyi Klonla ve Bağımlılıkları Yükle

```sh
git clone https://github.com/can-kayan/Nodemailler
```
```sh
cd nodemailler
```
```sh
npm install
```

### 4️⃣Set Up Environment Variables (.env) / Çevre Değişkenleri (.env) Ayarla  
Create a file named **`.env`** in the root directory and add the following / 
Proje dizininde **`.env`** adında bir dosya oluştur ve aşağıdaki bilgileri ekle:  

```sh
EMAIL_USER=seninmail@gmail.com
EMAIL_PASS=uygulama_sifren
```
### 5️⃣Run the Project / Projeyi Çalıştır  

Open the terminal and run / Terminali aç ve aşağıdaki komutu çalıştır:  

```sh
node index.js
```
