class Api::V1::TransactionsController < ApplicationController
  def index
    render json: Transaction.all
  end

  private

  def transaction_params
    params.require(:transaction).permit(:id, :transaction_date, :transaction_type, :amount, :description)
  end
end
