# MediCare : 
A complete Fullstack Solution Where performance and satisfaction of Patients visiting doctors can be tracked and security of their Medical Records can be maintained 

[Published Documentation](https://docs.google.com/document/d/e/2PACX-1vT3X85TwW-_J4lQk8R2srZ_ZnoFmn7NzyATDSJj8QlI5DOFj5NkjnHDxb_fO32uvHs057uJ-DAo7tS1/pub)

![MediCare](/demo.gif)

Book seats for your event or movies 

## Table of Contents [Phase 1]

- [Cinema Ticket Booking System](#cinema-ticket-booking-system)
  - [Features](#features)
  - [Bakend TechStack](#backend-techstack)
  - [Bakend TechStack](#frontend-techstack)
  - [Testing Tools](#testing-tools)
  - [Overview](#getting-started)
  - [About Backend](#steps-to-setup-the-spring-boot-backend-app)
  - [About Frontend](#steps-to-setup-the-react-frontend-app)

## Features

- **User registration**: Users Can be any new Doctors , Patients , Staff comming to the hospital/Medical Org.
- **Medical Appointment**: Browse through a wide selection of available doctors based on their needs and speciality.
- **Secure Medical Records**: Patients Can easily track and access their past medical history and consultations.
- **Analytics**: Any adminstrator of the organisation with the admin level access can Track the doctors performance with respect to customer feedback on their Dashboard.
- **Doctors Analytics**: Doctors can track their patients analytics through the dashboard analytics.
- **Recent Cases**: Patients can see the most rated doctors and book the appointments with them.  
- **Appointment Slots**: Patients can set up / schedule the appointment with the doctors based on thier schedule.
- **Booking Management**: Efficiently book appointments and store Appointment information in the database.
- **Dynamic Availibilty Updates**: Real-time updates of  availability of doctors based on new Appointments and sessions.

## Backend Techstack

- Java Core
- Stream Api
- Hibernate / JPA
- PostgresSql
- Spring Boot 3.2
- Maven
- Spring Security
- JWT Authentication

## Frontend Techstack

- JavaScript
- ReactJs
- MaterialUI
- Axios
- Tailwind CSS

## Testing Tools

- Postman [For API Testing]

## Getting Started

To get started with this project, you will need to have the following installed on your local machine:

- JDK 17+
- Maven 3+
- PostgresSql
- PGAdmin
- NodeJS

Also Below is the ER Diagram of the Project Database

![MediCare](/ERDiagram.png)

## Steps to Setup the Spring Boot Backend app

1. **Clone the application**

```zsh
git clone https://github.com/Srajal-Cresteyy/MediCare.git
cd backend
```

2. **Install PostgresSQL and PGAdmin GUI**

- Refer the docs [installing and starting PostgresSQL on different platforms](https://www.postgresql.org/docs/current/tutorial-install.html).

3. **Set Up the Database**

```
Open PostgreSQL using your preferred method (command-line or PGAdmin).
Create a new database named medicare 
```

4. **Update Configuration**
- Open the src/main/resources/application.properties file.

*Update the following properties with your PostgreSQL credentials:*

application.properties
  ```
    Copy code
    spring.datasource.url=jdbc:postgresql://localhost:5432/medicare
    spring.datasource.username=<your_postgres_username>
    spring.datasource.password=<your_postgres_password>
  ```
  - Optionally, configure your JWT Secret Key by setting it as an environment variable:
  
  ```export JWT_SECRET_KEY=your_secret_key```

5. **Run the Application**

- Run the Spring Boot application using Maven:
  - Copy code
      ```mvn spring-boot:run```
      The backend application will start and can be accessed at:
      ``http://localhost:8088``

Here’s a summary of key settings in application.properties:

# application.properties

# Application name
    spring.application.name=medicare

# PostgreSQL configuration
    spring.datasource.url=jdbc:postgresql://localhost:5432/medicare
    spring.datasource.username=<your_postgres_username>
    spring.datasource.password=<your_postgres_password>
    spring.datasource.driver-class-name=org.postgresql.Driver

# Hibernate configuration
    spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.format_sql=true

# Server port
    server.port=8088

# JWT configuration
    jwt.secret=${JWT_SECRET_KEY}
    jwt.expiration=86400000

# Disable SSL
    server.ssl.enabled=false

# Sample data flag
    insert.sample.data=false

Notes
Ensure that PostgreSQL is running on your system before starting the application.
Use a secure JWT_SECRET_KEY in production.
Avoid hardcoding sensitive information (e.g., database credentials) in application.properties. Instead, use environment variables for security.
Also sample data auto insertion is create for inserting sample data

## Steps to Setup the React Frontend app

1. **Add API_URL and other values to .env**

    + open `frontend/.env`

3. **Run the app**
```zsh
cd frontend
npm install
npm run dev
```

The frontend application will be available at http://localhost:5173.
