# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

    ### Setting up local environment

    ([Install Docker](https://docs.docker.com/get-docker/))
    * verify installation ran succesfully by running `docker -v` and `docker-compose -v` in your terminal and confirm version numbers are printed.
    * if both of the above commands executed succesfully, run `docker-compose up`

    Run migrations
        * visit http://localhost:3000/api/ping
            - you will receieve a migration error, the easiest way to run migrations is the Rails GUI that shows on the page. Click button `Run Migrations` this can also be done by running the command found on that page preceded by `docker exec` in your terminal if you prefer that method.

    Navigate to Frontend and Register
        * visit http://localhost:3001/register
            - register with whatever nickname you'd like and save.

    You're all set, Happy Coding!
