class Order < ApplicationRecord
  belongs_to :user
  validates :order_cost, :order_quantity, :est_shipping, :address, :processed, presence: true
  validates :order_number, uniqueness: true
end