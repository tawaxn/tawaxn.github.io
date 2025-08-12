# My Portfolio Website

เว็บไซต์ Portfolio ที่สวยงามและทันสมัย สร้างด้วย HTML, CSS และ JavaScript

## ✨ คุณสมบัติ

- 🎨 **การออกแบบที่ทันสมัย** - ใช้ gradient สีสวยงามและ animations
- 📱 **Responsive Design** - ใช้งานได้ดีทั้งบนคอมพิวเตอร์และมือถือ
- 🚀 **Performance ที่ดี** - โหลดเร็วและใช้งานลื่นไหล
- 🎯 **SEO Friendly** - โครงสร้าง HTML ที่เหมาะสมสำหรับ SEO
- 🌐 **ภาษาไทย** - รองรับการแสดงผลภาษาไทย

## 🛠️ เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างเว็บไซต์
- **CSS3** - การจัดรูปแบบและ animations
- **JavaScript (ES6+)** - ฟังก์ชันการทำงานแบบ interactive
- **Font Awesome** - ไอคอนสวยงาม
- **Google Fonts** - ฟอนต์ Poppins ที่อ่านง่าย

## 📁 โครงสร้างไฟล์

```
port/
├── index.html          # ไฟล์ HTML หลัก
├── styles.css          # ไฟล์ CSS สำหรับการจัดรูปแบบ
├── script.js           # ไฟล์ JavaScript สำหรับฟังก์ชันการทำงาน
└── README.md           # ไฟล์คำอธิบายนี้
```

## 🚀 วิธีการใช้งาน

### 1. เปิดเว็บไซต์
- เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์
- หรือใช้ Live Server ใน VS Code

### 2. ปรับแต่งเนื้อหา
แก้ไขไฟล์ `index.html` เพื่อเปลี่ยนข้อมูลส่วนตัว:

```html
<!-- เปลี่ยนชื่อในส่วน Hero -->
<h1 class="hero-title">สวัสดีครับ, ฉันชื่อ <span class="highlight">ชื่อของคุณ</span></h1>

<!-- เปลี่ยนข้อมูลติดต่อ -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

### 3. ปรับแต่งสีและสไตล์
แก้ไขไฟล์ `styles.css` เพื่อเปลี่ยนสีและสไตล์:

```css
/* เปลี่ยนสีหลัก */
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
}

/* เปลี่ยนสีพื้นหลัง Hero section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 4. เพิ่มฟังก์ชันใหม่
แก้ไขไฟล์ `script.js` เพื่อเพิ่มฟังก์ชันการทำงานใหม่

## 🎨 การปรับแต่ง

### เปลี่ยนรูปภาพ
แทนที่ placeholder ด้วยรูปภาพจริง:

```html
<!-- แทนที่ profile-placeholder -->
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Photo" class="profile-photo">
</div>
```

### เพิ่มโปรเจคใหม่
เพิ่มโปรเจคในส่วน Projects:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>ชื่อโปรเจค</h3>
        <p>คำอธิบายโปรเจค</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

### ปรับแต่งทักษะ
แก้ไขระดับทักษะในส่วน Skills:

```html
<div class="skill-item">
    <span class="skill-name">ชื่อทักษะ</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

## 📱 Responsive Design

เว็บไซต์รองรับการแสดงผลบนอุปกรณ์ต่างๆ:

- **Desktop** - แสดงผลแบบเต็มรูปแบบ
- **Tablet** - ปรับ layout ให้เหมาะสม
- **Mobile** - แสดงผลแบบ single column พร้อม hamburger menu

## 🌟 Animations และ Effects

- **Fade-in animations** - เอฟเฟกต์การแสดงผลเมื่อเลื่อนหน้า
- **Hover effects** - เอฟเฟกต์เมื่อนำเมาส์ไปวาง
- **Smooth scrolling** - การเลื่อนหน้าที่นุ่มนวล
- **Parallax effect** - เอฟเฟกต์การเคลื่อนไหวแบบ 3D

## 🔧 การปรับแต่งขั้นสูง

### เพิ่ม Google Analytics
เพิ่มในส่วน `<head>` ของ `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### เพิ่ม Contact Form Backend
เชื่อมต่อกับ backend service เช่น Formspree หรือ Netlify Forms

### เพิ่ม Blog Section
เพิ่มส่วนบล็อกเพื่อแสดงบทความและความรู้

## 📞 การติดต่อ

หากมีคำถามหรือต้องการความช่วยเหลือ:

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: สร้าง issue ใน repository นี้

## 📄 License

โปรเจคนี้เป็น Open Source และสามารถใช้งานได้อย่างอิสระ

---

**สร้างด้วย ❤️ และ ☕** - สร้างเว็บ Portfolio ที่สวยงามและใช้งานง่าย 