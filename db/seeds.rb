# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
transactions = Transaction.create([
  {transaction_date:'1/1/2018', transaction_type:'credit', amount:2000.25, description:'pay'},
  {transaction_date:'2/1/2018', transaction_type:'debit', amount:177.13, description:'dinner'},
  {transaction_date:'3/1/2018', transaction_type:'credit', amount:6444.33, description:'check'},
  {transaction_date:'4/1/2018', transaction_type:'debit', amount:99.99, description:'car'},
  {transaction_date:'5/1/2018', transaction_type:'credit', amount:6152.11, description:'payday'},
  ])
