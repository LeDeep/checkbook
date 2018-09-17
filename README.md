# Checkbook

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
3. [Install Foreman](https://github.com/ddollar/foreman)
3. Run following commands:

    ```
    yarn Install
    bundle Install
    rake db:migrate
    rake db:seed (if you want to start with some transactions)
    foreman start -f Procfile.dev -p 3000
    ```
    
