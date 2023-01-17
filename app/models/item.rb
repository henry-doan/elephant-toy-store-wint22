class Item < ApplicationRecord
  has_many :users, through: :reviews
  has_many :reviews, dependent: :destroy
  
  validates :item_name, :description, :cost, :quantity, :category, :discount, :brand, presence: true
end
