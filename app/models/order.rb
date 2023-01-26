class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  validates :order_cost, :order_quantity, :address, presence: true
  validates :order_number, uniqueness: true
end