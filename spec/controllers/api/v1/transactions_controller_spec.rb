require "rails_helper"

describe Api::V1::TransactionsController do
  let!(:credit_transaction) { Transaction.create(id: 1, transaction_date: "2018-08-21", transaction_type: "credit", amount: 10000, description: "pay")}
  let!(:debit_transaction) { Transaction.create(id: 2, transaction_date: "2018-08-21", transaction_type: "debit", amount: 5186, description: "bills")}

  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "#index" do
    it "should route from GET /transactions" do
      expect({get: "api/v1/transactions"}).to route_to(controller: "api/v1/transactions", action: "index")
    end

    it "returns all transactions" do
      get :index, params: {}
      expect(Transaction.count).to eq 2
    end

    it "responds with http status 200" do
      get :index, params: {}
      expect(response.status).to eq 200
    end
  end
end
