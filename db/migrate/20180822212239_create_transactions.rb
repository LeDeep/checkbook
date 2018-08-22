class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.date :transaction_date
      t.string :transaction_type
      t.float :amount
      t.string :description

      t.timestamps
    end
  end
end
