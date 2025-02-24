# Medicare - Medical Records Simplified

![Medicare](/demo.gif)

[Full Documentation](https://docs.google.com/document/d/e/2PACX-1vT3X85TwW-_J4lQk8R2srZ_ZnoFmn7NzyATDSJj8QlI5DOFj5NkjnHDxb_fO32uvHs057uJ-DAo7tS1/pub)

## Table of Contents

- [MediCare : Medical Record Management System](#medical-record-management-system)
  - [Features](#features)
  - [TechStack](#technologies)
  - [Overview](#getting-started)
  - [About Backend](#steps-to-setup-the-spring-boot-backend-app)
  - [About Frontend](#steps-to-setup-the-react-frontend-app)
  - [About Database](#about-database)

## Features

- **User registration**: A User can Register as a Patient , Doctor , Staff.
- **Appointment Booking**: Browse through a wide selection of available doctors and book appointments with them in available slots.
- **Appointment Management**: View all your current and previous appointments .
- **Doctor recommendation**: Recommendations of doctors based on their recent cases and performances.  
- **Slot Selection**: Choose your desired slot for the selected doctor as per your own time.
- **Dynamic Analytics**: Real-time updates of doctors and their performances to the admin to analyze and evaluate the performances of the doctors.
- **Recent Cases**: Admin can view the recent cases.

## Technologies

- Spring Boot 3.2
- Maven
- Spring Security
- ReactJS
- PostgresSQL
- Postman

## Getting Started

To get started with this project, you will need to have the following installed on your local machine:

- JDK 17+
- Maven 3+
- PostgresSql
- PGAdmin

## Steps to Setup the Spring Boot Backend app

1. **Clone the application**

```zsh
git clone [(https://github.com/Srajal-Cresteyy/MediCare.git))
cd backend
```
2. **Install PostgresSQL and PGAdmin GUI**

Refer the docs [installing and starting PostgresSql on different platforms]((https://www.postgresql.org/docs/current/tutorial-install.html)).


2. **Create username and password as per your PostgresSql installation**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your PostgresSql installation

2. **Create a new Database named medicare**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your PostgresSql installation

3. **Run the app**

	You can run the spring boot app by typing the following command

	```zsh
	mvn spring-boot:run
	```

	The backend application will be available at http://localhost:8088.

## Steps to Setup the React Frontend app

1. **Run the app**
```zsh
cd frontend
npm install
npm start
```

The frontend application will be available at http://localhost:5173.

## About Database 

1. **Below is the ER Diagram of the Current Database**

![ERDiagram](https://github.com/user-attachments/assets/37b2a2cc-c73d-4489-b4b3-3827466d7a3d)
