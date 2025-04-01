# 🔗 Link Analyzer

## 📌 Description
**Link Analyzer** is a JavaScript application that generates an "internal links" report for any website by crawling its pages. The program extracts and normalizes URLs found on the given web page and follows internal links to analyze the structure of the website.

## ✨ Features
✅ Crawls web pages and extracts internal links  
✅ Normalizes URLs for consistency  
✅ Handles both relative and absolute URLs  
✅ Fetches and parses HTML content  
✅ Includes Jest tests for key functionalities  

## 📥 Installation
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Steps
- 1️⃣ Clone the repository:
   ```sh
   git clone https://github.com/OferRavid/link-analyzer.git
   ```
- 2️⃣ Navigate to the project directory:
   ```sh
   cd link-analyzer
   ```
- 3️⃣ Install dependencies:
   ```sh
   npm install
   ```

## 🌐 Usage
To run the web crawler, use:
```sh
npm start <URL>
```
Example:
```sh
npm start https://example.com
```

## 🛠 Running Tests
This project includes unit tests using **Jest**. To execute tests, run:
```sh
npm test
```

## 📁 Project Structure
```
📂 link-analyzer/
├── 🕷️ crawl.js        # Core crawling and URL processing logic
├── 🧪 crawl.test.js   # Jest test cases for URL normalization and extraction
├── 🔗 main.js         # Entry point for the application
├── 📦 package.json    # Project configuration and dependencies
└── 📖 README.md       # Project documentation
```

## 🤝 Contributing
Contributions are welcome! If you’d like to improve this project, feel free to fork the repository and submit a pull request. 💡

## 📜 License
This project is licensed under the **MIT License**.

## 👤 Author
**Ofer Ravid**

