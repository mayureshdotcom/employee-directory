CREATE DATABASE employee_directory;

USE employee_directory;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    date_of_joining DATE NOT NULL,
    INDEX idx_employee_name (name),
    INDEX idx_employee_department (department)
);

INSERT INTO employees
(name, email, department, designation, date_of_joining)
VALUES
('Rahul Sharma', 'rahul@gmail.com', 'IT', 'Developer', '2024-01-15'),
('Priya Patil', 'priya@gmail.com', 'HR', 'HR Executive', '2023-05-10'),
('Amit Shah', 'amit@gmail.com', 'IT', 'Software Engineer', '2022-08-20'),
('Sneha Joshi', 'sneha@gmail.com', 'Finance', 'Accountant', '2024-03-12'),
('Neha Desai', 'neha@gmail.com', 'Marketing', 'Marketing Executive', '2023-11-01');