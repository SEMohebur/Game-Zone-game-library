
🎮 Game Zone — Online Game Library
🧾 Overview

Game Zone হলো একটি Interactive Game Library Website, যেখানে ব্যবহারকারীরা বিভিন্ন জনপ্রিয় গেম ব্রাউজ, ডাউনলোড এবং গেম সম্পর্কিত বিস্তারিত তথ্য দেখতে পারে।
এটি সম্পূর্ণভাবে Firebase Authentication দ্বারা সুরক্ষিত, যাতে ব্যবহারকারীর ব্যক্তিগত তথ্য ও অ্যাক্সেস নিরাপদ থাকে।

🚀 Live Demo

🔗 Live Site: [Your Netlify Live Link Here](https://roaring-cactus-fc10fd.netlify.app/)



🧠 Key Features

✅ Firebase Authentication System

🔹 Register & Login (Email + Password)

🔹 Google Sign-In Integration

🔹 Forget Password System (Password Reset Email)

🔹 Update Profile (Name, Photo)

🔹 Logout Functionality

✅ Protected Routes

🔒 Only logged-in users can access the Game Details page.

🚫 If not logged in → redirected to Login/Register.

✅ Dynamic Navbar

👤 Shows user’s profile photo if logged in.

🔗 Shows Login & Register links if not logged in.

📋 Clicking on profile photo shows:

User name & email

“Update Profile” button → redirects to profile page

✅ Profile Page

🖼️ Shows user’s profile picture & name

✏️ Allows updating name & photo

🔓 Logout button for easy sign-out

✅ Password Reset Feature

Clicking "Forgot Password" on Login page opens a new page with the entered email pre-filled.

On clicking "Reset Password", an email is sent instantly, and Gmail tab opens to reset the password.

✅ Dynamic Tab Titles

Each route dynamically updates the browser tab title based on the current page (e.g., Home | Game Zone, Login | Game Zone, etc.)

✅ Modern UI / UX

⚡ Built with Tailwind CSS & DaisyUI

🎨 Smooth animations via Motion library

🌀 Responsive carousel using React Slick & Swiper

🚀 Engaging layout with React Fast Marquee for dynamic text effects

🧩 Tech Stack
Category	Tools / Libraries
Frontend	React 19, React Router 7
UI Styling	Tailwind CSS 4, DaisyUI 5
Animation	Motion (Framer Motion React Client)
Firebase	Firebase 12 (Auth, Hosting)
Carousel / Slider	React Slick, Swiper
Icons	React Icons
Others	React Fast Marquee
