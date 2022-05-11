# Jumia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Deployment

Run `npm run docker:build` to create a docker image then go into your docker app or use the command `npm run docker:run` to run the container.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project requirements 

Using the randomuser.me API, create a SPA2 with a view showing the list of users, with at least this information:
• Name
• Gender
• Location
• E-mail
• Current Age
• Registration Seniority (period since registration)
• Phone number
• Picture

Should be possible to filter by gender and by nationality.
Should be possible to export current list by CSV or XML.

Required topics to take into account:
• Focus on design (feel free to use component libraries, p.e. Angular Material)
• Code standards / clean code
• Unit Testing
• Responsiveness
• Docker with the necessary configs to serve the SPA

Bonus topics:
• Infinite/Virtual Scrolling
• Possibility to add or remove columns
• Only request the fields that really need (based on the columns selected)
• E2E tests

## Notes
- Gender filter doesnt seem to be working despite following the randomuser api to request gender specific results
- Create a more robust URL builder to exclude or include parameters per user selection
- Tried a virtual scroll implementation using the angular CDK but wasnt successful in the time I had
- Search how to get the xml donwload working as a proper download
