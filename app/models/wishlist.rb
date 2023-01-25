class Wishlist < ApplicationRecord
  has_many :wishlist_items, dependent: :destroy
  belongs_to :user
  validates :wishlist_name, :wish_total, :wish_item_quantity, presence: true
end
