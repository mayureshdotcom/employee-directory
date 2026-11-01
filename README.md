
# Employee Directory Search System

## Project Description

The Employee Directory Search System is a simple web application that allows users to search and view employee details by name or department.

## Technologies Used

**Frontend:**
- React
- Vite
- CSS

**Backend:**
- Python
- FastAPI
- SQLAlchemy

**Database:**
- MySQL

## Features

- Search employees by name.
- Search employees by department.
- Optimized search using debouncing.
- Loading message while fetching data.
- Error handling.
- No employees found message.
- Reusable React components.

## Database Choice

MySQL is used because it is a relational database that stores employee information in a structured format.

SQLAlchemy is used to connect Python with MySQL.

## Search Performance Optimization

- Debouncing waits 500ms after the user stops typing.
- Previous API requests are cancelled when a new search starts.
- Database indexes are created on employee name and department.
- Prefix matching is used for searching.
- Maximum 50 employee records are returned.

## Project Setup

### 1. Database Setup

- Open MySQL Workbench.
- Execute backend/database.sql.
- Create the backend/.env file using .env.example as reference.
- Enter your MySQL password.

### 2. Backend Setup

Open the backend folder in terminal.

Create virtual environment:

python -m venv venv

Activate:

venv\Scripts\activate

Install packages:

pip install -r requirements.txt

Run backend:

uvicorn main:app --reload

Backend URL: http://127.0.0.1:8000

API Documentation: http://127.0.0.1:8000/docs

### 3. Frontend Setup

Open another terminal.

Go to frontend:

cd frontend

Install packages:

npm install

Create frontend/.env:

VITE_API_BASE_URL=http://127.0.0.1:8000

Start frontend:

npm run dev

Frontend URL: http://localhost:5173

## Project Structure

employee-directory/
- frontend/
- backend/
- README.md
- .gitignore
