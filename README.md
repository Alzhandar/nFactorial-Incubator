# Color Palette Explorer

### Created by: Daribayev Alzhan

## Setup Instructions

1. Open the VS Code editor to start the project.
2. Upon opening the project, open 2 terminals:

### In the first terminal:

1. Navigate to the backend directory of the project by running `cd color-backend`.
2. Activate the virtual environment by running `myvenv\Scripts\activate`.
3. Start the Django server by running `python manage.py runserver`.
4. Open the link [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to access the API.

### In the second terminal:

1. Navigate to the frontend directory of the project by running `cd color-frontend`.
2. Start the Angular application by running `ng serve`.
3. Open the link [http://localhost:4200/](http://localhost:4200/) to access the frontend.

## Design and Development Process

The "Color Palette Explorer" application was designed with a focus on creating a REST API using Django on the backend and Angular on the frontend. 

The backend followed the standard Django project structure, divided into color and palette applications. All API logic was divided into models, serializers, views, and URLs to maintain code cleanliness and ease of maintenance.

The frontend was implemented using Angular, allowing for a dynamic and interactive user interface. Services were created to communicate with the backend API on the frontend, along with components for displaying colors, palettes, and color settings.

## Discussion of Compromises and Issues

During development, the decision was made to use the SQLite database for ease of deployment and testing of the project. However, for a more scalable application, a transition to a more powerful database such as PostgreSQL may be necessary.

Additionally, asynchronous request handling and error handling on both the frontend and backend could have posed challenges during development. It was important to ensure the reliability and security of the application by handling all possible exceptions and input data validation.
