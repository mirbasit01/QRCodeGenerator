📱 QR Code Generator – React App
This is a React-based QR Code Generator that allows users to create QR codes from:

🌐 URLs

✍️ Plain text

👤 Contact information (vCard format)

It supports downloading, copying QR content, and uses QRious (or Google fallback) for rendering the QR code dynamically in the browser.

🧩 Features
✅ Generate QR Codes for:

URL links

Text

Contact Information (vCard format)

🧾 Contact fields supported:

First Name / Last Name

Phone Number

Email

Organization

Website

🎨 Modern and responsive UI with Tailwind CSS
📥 Download QR code as PNG
📋 Copy QR data to clipboard
🛠️ Intelligent fallback to Google Chart API if QR library fails

🛠️ Tech Stack
Library	Usage
React	UI framework
Tailwind CSS	Responsive styling
Lucide React	Icons
QRious (CDN)	QR code generation
Google Chart API	Fallback QR generation

📁 Project Structure
css
Copy
Edit
src/
├── QRCodeGenerator.jsx   # Main QR Code UI & logic
└── App.jsx / main.jsx     # Entry point (Vite / CRA based)
public/
├── index.html
🚀 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/qr-code-generator-react.git
cd qr-code-generator-react
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Development Server
bash
Copy
Edit
npm run dev  # If using Vite
# OR
npm start    # If using Create React App
🔍 How It Works
💡 QR Generation Logic
Loads QRious dynamically via CDN

If QRious fails, falls back to:

Google Charts QR API

QR Server API (as final fallback)

📇 Contact → vCard Format
The contact form converts user input to the standard vCard 3.0 format before generating the QR code.

plaintext
Copy
Edit
BEGIN:VCARD
VERSION:3.0
FN:John Doe
N:Doe;John;;;
ORG:Company Name
TEL:+1 555 123-4567
EMAIL:john@example.com
URL:https://example.com
END:VCARD
📸 Screenshots
Generator UI	QR Code Preview

<img width="1889" height="858" alt="image" src="https://github.com/user-attachments/assets/956a6fd9-8163-4466-aa7c-95fee7f4eb83" />

📦 Deployment
You can deploy this project on:

Vercel

Netlify

GitHub Pages

Firebase Hosting

Just make sure you build the project first:

bash
Copy
Edit
npm run build
📄 License
This project is licensed under the MIT License – feel free to use, modify, or distribute.

🙌 Author
Created with ❤️ by [ABDUL BASIT]
Feel free to connect or contribute to improve the project!
