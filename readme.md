# 📧 Nodemailer ile Gmail SMTP Kullanarak E-Posta Gönderme

Bu proje, **Node.js** ve **Nodemailer** kullanarak **Gmail SMTP** üzerinden e-posta göndermeyi sağlar.  
Özellikle **hesap doğrulama, parola sıfırlama ve bildirim e-postaları** gibi işlemler için uygundur.  
**Html kısmını özelleştirerek** istediğiniz türde mail gönderebilirsiniz.


---

## 📌 Özellikler

✔️ Gmail SMTP kullanarak e-posta gönderme  
✔️ Hesap doğrulama kodu içeren dinamik e-postalar  
✔️ Kolay kurulum ve kullanım  

---

## 🚀 Kurulum & Kullanım

### 1️⃣ Gereksinimler

Bu projeyi kullanmak için şunlar gereklidir:  

- **[Node.js](https://nodejs.org/)** yüklü olmalıdır.  
- **Nodemailer** kütüphanesi gereklidir.  
- **Gmail SMTP kullanımı için [Google Uygulama Şifresi](https://myaccount.google.com/apppasswords)** alınmalıdır.  

---

### 2️⃣ Google Uygulama Şifresi Alma Adımları

> **📌 Not:** Gmail'in standart şifreleri SMTP ile çalışmaz. Bu yüzden **Uygulama Şifresi** almanız gerekmektedir.  

1. [Google Hesap Ayarları](https://myaccount.google.com/) sayfasına git.  
2. **Güvenlik** sekmesine tıkla.  
3. **"İki Adımlı Doğrulama"** özelliğini etkinleştir.  
4. **"Uygulama Şifreleri"** bölümüne gir.  
5. **"Uygulama Seç"** kısmından **Posta** ve **Cihaz Seç** kısmından **Windows Bilgisayar** ya da **Mac** seç.  
6. **"Oluştur"** butonuna tıklayarak **16 haneli bir şifre** al.  
7. Bu şifreyi **`.env`** dosyanızda kullanacağız.  

---

### 3️⃣ Projeyi Klonla ve Bağımlılıkları Yükle

```sh
git clone https://github.com/can-kayan/Nodemailler
```
```sh
cd nodemailler
```
```sh
npm install
```

### 4️⃣ Çevre Değişkenleri (.env) Ayarla  

Proje dizininde **`.env`** adında bir dosya oluştur ve aşağıdaki bilgileri ekle:  

```sh
EMAIL_USER=seninmail@gmail.com
EMAIL_PASS=uygulama_sifren
```
### 5️⃣ Projeyi Çalıştır  

Terminali aç ve aşağıdaki komutu çalıştır:  

```sh
node index.js
```
