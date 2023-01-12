class Item < ApplicationRecord
    validates :item_name, :description, :cost, :quantity, :category, :discount, :brand, presence: true

end
