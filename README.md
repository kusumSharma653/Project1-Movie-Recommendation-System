##Movie Recommendation System
A full-stack movie recommendation system that suggests similar movies using machine learning techniques. Built with Python (Flask) on the backend and React (Vite + Tailwind CSS) on the frontend.

#Features
🎬 Recommend top 5 movies based on selected input

#ML-based similarity detection using cosine similarity

📦 React frontend styled with Tailwind CSS

📁 Flask backend serving the recommendations via API

🧠 Includes Jupyter Notebook for EDA or custom analysis

📂 Large model files tracked using Git LFS

#Tech Stack
Frontend: React, Vite, Tailwind CSS

Backend: Python, Flask

Machine Learning: Pandas, Scikit-learn

Version Control: Git, GitHub, Git LFS

#Project Structure

movie-recommendation-system/
│
├── backend/
│   ├── app.py                 # Flask backend server
│   ├── movie_list.pkl         # Pickled movie names list
│   ├── similarity.pkl         # Pickled similarity matrix
│   └── requirements.txt       # Python dependencies
│
├── frontend/
│   ├── index.html             # Entry HTML
│   ├── src/                   # React source code
│   ├── tailwind.config.js     # Tailwind config
│   └── vite.config.js         # Vite config
│
├── notebooks/
│   └── analysis.ipynb         # Optional Jupyter analysis notebook
│
├── .gitignore
├── .gitattributes             # Git LFS config
└── README.md


#How to Run the Project
🔧 1. Clone the repository

git clone https://github.com/kusumSharma653/movie-recommendation-system.git
cd movie-recommendation-system

🧪 2. Run the Backend (Flask + Python)

cd backend
pip install -r requirements.txt
python app.py
Flask will start the API at http://127.0.0.1:5000

🌐 3. Run the Frontend (React + Vite)

cd frontend
npm install
npm run dev
Visit http://localhost:5173 to see the frontend in action

📓 4. Run the Jupyter Notebook

cd notebooks
jupyter notebook analysis.ipynb


📦 Handling Large Files with Git LFS
This project uses Git LFS to manage .pkl files:

git lfs install
git lfs pull



🙋‍♀️ Author
Kusum Sharma



