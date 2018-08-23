# README

Checkbook application written in Rails and React. Input credits and debits and see your account balance. Includes ability to edit and delete transactions.

----
## Dependencies
* Rails 5.0.7
* Ruby 2.5.1
* NodeJS
* ReactJS
* Yarn
* Foreman
* sqlite

----
## Getting started
1. Clone the repo
2. [Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable), if it's not already.
3. Run following commands:

    yarn Install
    bundle Install
    rake db:migrate
    rake db:seed (if you want to start with some transactions)
    rails s or foreman start -f Procfile.dev -p 3000 (make sure you have [Foreman](https://github.com/ddollar/foreman) installed)

----
## Next Steps
1. Testing. There are a few specs to test the Rails API. Would have liked to add more thorough tests and tests for the frontend if I had more time.
2. Running balance. Currently the app shows the overall balance at the top of the page. It would be nice to add a column that shows the running balance next to each transaction.
3. Server and client validations. The app currently does not have any validations or error handling. For simplicity, and due to time constraints, the `Add` button is disabled unless all fields have values. But this is somewhat hacky, and in need of a refactor that would provide better validation handling.
4. Add search feature. Allow user to search for transactions.
5. Sorting. Currently no sorting in the app. All added transactions are added to the bottom of the table. Would make sense to default sort by date.
6. Pagination. For a more orderly representation of the data.
