class Item < ApplicationRecord
    validates :item_name, :description, :cost, :quantity, :category, :discount, :brand, presence: true
    #has_many :users, through: :reviews
    #has_many :reviews,  dependent: :destroy
end
