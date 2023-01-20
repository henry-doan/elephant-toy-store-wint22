class Wishlist < ApplicationRecord
  belongs_to :user
  validates :wishlist_name, :wish_total, :wish_item_quantity, presence: true
end
