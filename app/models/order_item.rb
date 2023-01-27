class OrderItem < ApplicationRecord
  belongs_to :order
  validates :item_id, presence: true
end