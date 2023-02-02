class Item < ApplicationRecord
    validates :item_name, :description, :cost, :quantity, :category, :discount, :brand, :image, presence: true
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
end
