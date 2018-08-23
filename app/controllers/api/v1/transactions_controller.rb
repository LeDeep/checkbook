class Api::V1::TransactionsController < ApplicationController
  def index
    render json: Transaction.all
  end

  def create
    transaction = Transaction.create(transaction_params)
    render json: transaction
  end

  def update
    transaction = Transaction.find(params[:id])
    transaction.update_attributes(transaction_params)
    render json: transaction
  end

  private

  def transaction_params
    params.require(:transaction).permit(:id, :transaction_date, :transaction_type, :amount, :description)
  end
end
