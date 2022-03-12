<h1 align="center"> Health Diary </h1>
<p align="center"> A web-based telemedicine service that connects doctors and patients and allows patients to receive care remotley </p>

<br />

https://user-images.githubusercontent.com/61055952/158015680-242ced4d-2b70-4999-8c67-6eeaf48bc6b8.mp4

**Frontend Code :**   https://github.com/JaberHPranto/HealthDiary/tree/dashboard
<br />
**Backend Code :**   https://github.com/hafizsheetab/restApiHealthDiary

## Table of contents
- [Purpose of the Application](#purpose-of-the-application)
- [Viewpoints of different Users](#viewpoints-of-different-users)
- [Requirement Analysis](#requirement-analysis)
- [Usage Scenario](#usage-scenario)
- [Technologies](#technologies)

## Purpose of the Application
For our SPL 2 project, we will try to create a web application where patients with minor to moderate health issues can receive doctor’s consultation without needing to visit them physically. 
During this time of the global pandemic, it is now more important than ever to be able to solve minor to moderate health issues without visiting a hospital, if possible.
So, in short it can be said that, the benefits that one can receive from this web application includes reduction in physical movement outdoors and saves a lot of time from the patient’s schedule as well as the hassle of fixing an appointment.


## Viewpoints of different Users 
#### Viewpoint of the Patients 
- User friendly system
- Search for specialized doctors according to their needs
- A dashboard consist of their records and upcoming appointments
- Chat with doctors
- Make an appointment

#### Viewpoint of the Doctors 
- Join organizations
- Join a patient’s requested appointment by video conference [not completed]
- Chat with patients
- A dashboard for managing all appointments
- Fill out the pre-formatted prescription form after a conference

## Requirement Analysis 
- Doctors, patients and administrators of the organization have to sign up in three different categories according to their credentials.
- Doctors have to register and be allocated under an organization by the administrator of the organization.
- Proper and valid credentials of doctors and organizations will be checked while signing up.       
- Patients, doctors and administrators will have to sign up having different roles.
- Patients will be directed to a suitable doctor by the organization according to their need.
- Patients will be able to communicate with doctors using chat or video calling options after getting an appointment.
- If the problem hasn't been solved, the patient will be able to make another appointment with a different doctor
- Patients’ and doctors consultation history will be on-record.
- Efficient and user friendly.
- The user interface of the system would be easy.
- A preformatted prescription will be available for the doctors to input patients' condition, prescribe medicines and write precautionary measures.

## Usage Scenario
There will be five different kinds of actors for our web application. Among them, the primary actors are: Patients, Doctors, Hospitals and System Admin and the secondary actors are: Hospitals and the Database. The system admin verifies whether the information given by other users are correct or not and displays error if necessary. Hospitals work both as a primary actor and a secondary actor.

### From Patients’ perspective:
Patients will be able to Set up a new profile with their Email, Password, Name and User Type. Then they will be able to Log in to our application with their Name and Password which will get verified by the System Admin. Afterwards, patients will see a “Make Appointment Generally Button” and “Make Appointment Specifically Button”. Pressing the “Make Appointment Specifically Button” will show two Search Bars to search through a list of Organizations by their name and a list of Doctors by their names. Once an organization and a doctor is selected, or  the “Make Appointment Generally Button” is pressed, an option to select a time will be displayed. Then after further validation from the Hospital and System Admin, patients will be able to check for available appointments in the appointment bar and wait for their specified time to join the appointment. The appointment will be a video Conference.

### From Doctors’ perspective:
Doctors will also be able to Set up new profiles with their Email, Password, Name, Qualification and User Type and then Log in using their Name and Password. Next they’ll see a Search Bar to look up an Organization with their name to be affiliated with. To do this, doctors will have to submit their profile to their Organization of choosing. This data will be recorded in the database and get validated by the Hospital for approval. If it gets accepted, doctors will then see an Appointment Bar where they will be able to check for available Appointments. Then they will attend their appointments in the specified time which will be a video conference.

## Technologies 
- React js
- Node js
- Express
- MongoDB
- Redux



