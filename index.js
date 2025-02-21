const nodemailer = require("nodemailer");
require("dotenv").config();
let htmlTemplate=`
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hesap Doğrulama Kodu</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .email-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      background-color: #ffffff;
      border-radius: 15px;
      box-shadow: 0 12px 50px rgba(0, 0, 0, 0.1);
      text-align: center;
      animation: fadeIn 1s ease-out;
    }

    .email-header {
      font-size: 32px;
      font-weight: 600;
      color: #2C3E50;
      text-transform: uppercase;
      margin-bottom: 25px;
      letter-spacing: 2px;
      animation: slideIn 1s ease-in-out;
    }

    .cta-button {
      display: inline-block;
      margin-top: 30px;
      background-color: #2980b9;
      color: white;
      padding: 18px 35px;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      border-radius: 50px;
      transition: transform 0.3s ease, background-color 0.3s ease;
      animation: zoomIn 1s ease-in-out;
    }

    .cta-button:hover {
      background-color: #1abc9c;
      transform: scale(1.05);
    }

    .code-box {
      background-color: #34495e;
      color: #fff;
      font-size: 36px;
      font-weight: 700;
      padding: 20px;
      border-radius: 12px;
      margin: 30px 0;
      display: inline-block;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      animation: slideInCode 1s ease-out;
    }

    .footer {
      margin-top: 30px;
      font-size: 14px;
      color: #7f8c8d;
      text-align: center;
      animation: fadeInFooter 1.5s ease-in-out;
    }

    .footer a {
      color: #2980b9;
      text-decoration: none;
    }

    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideIn {
      0% { opacity: 0; transform: translateX(-50px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes zoomIn {
      0% { opacity: 0; transform: scale(0.5); }
      100% { opacity: 1; transform: scale(1); }
    }

    @keyframes slideInCode {
      0% { opacity: 0; transform: translateX(50px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeInFooter {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h1 class="email-header">Hesap Doğrulama</h1>
    <p>Merhaba,</p>
    <p>Hesabınızı doğrulamak için aşağıdaki doğrulama kodunu kullanın:</p>
    <div class="code-box">X7Z9-T5Q3</div>
    <p>Doğrulama işlemini tamamlamak için bu kodu girin.</p>
    <a href="https://your-verification-link.com" class="cta-button">Hesabımı Doğrula</a>
    <div class="footer">
      <p>Bu e-posta yalnızca hesap doğrulama amacıyla gönderilmiştir. Eğer bu işlemi siz yapmadıysanız, lütfen bu e-postayı dikkate almayın.</p>
      <p>Bize her zaman <a href="mailto:support@yourcompany.com">destek@company.com</a> adresinden ulaşabilirsiniz.</p>
    </div>
  </div>
</body>
</html>

` 
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// E-Posta Gönderme Fonksiyonu
const sendEmail = async (toEmail) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: "Hesap Doğrulama",
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-Posta gönderildi: " + info.response);
  } catch (error) {
    console.error("E-Posta gönderme hatası:", error);
  }
};

// Test için çalıştır
sendEmail("ornek@mail.com");