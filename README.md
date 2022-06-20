# WeatherDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.


## Development server

Run `npm install` to install all the packages `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running unit tests

Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Web-application

This web application is a prototype that displays information about the weather in any city of any chosen country. 

The user chooses the country then types in the city they want.
The application searches it's database and displays the information as required.


## Webapplication Features


## Data

I have created a json file with a mock up data. (Please note that the required information is combined in one json file for simplicity) 

To connect to this json file, I have created a service class with two methods that return the data as an observable (as a mockup to an actual API call). 
All other classes can access the service to get the data.


## Code Structure

The code is structured as follows: 
  App component
    Dashboard component (shell)
      Search component
      Weather component

The reason behind creating a dashboard shell is scalability; since dashboard can be one page of many different pages in the web application. App component is the parent shell where all other pages can be hosted.


Search and Weather components are the children of Dashboard.
There are two ways to display these components:

  - Calling the children components as 'component directives'.
    Adding 'structural directive -- *ngIf' to display or hide the weather component.
    Using Input and Output Decorators to allow the communication between the components.

  - Using auxilliary routes to display the weather component using the URL info.

For simplicity and cleaner code I decided to go with the second option which is the auxilliary routes. Weather component is a secondary route and lazy loaded.

With auxiliary routes I can avoid eager loading and ngIf directive whenever I want to display or hide the weather component, and I can avoid the different levels of communication. 
        Parent -> Child 1/ Child 1 -> Parent/ Parent -> Child 2 
        DashboardShell -> Search / Search -> DashboardShell / DashboardShell -> Weather



## Design

I have used svg to display the images as they are light and it's easier to control their properties such as (size - fill - stroke) without compromising the resolution. 


I have also used a combination of scss and tailwind for cleaner and more readable code, and faster coding. 



## Note
Regarding the gradient background. The color should be dynamic based on the temprature displayed. 
I was able to do that, but i couldn't calculate the exact range to display the correct shade.
