class WishlistItem < ApplicationRecord
  belongs_to :wishlist
  validates :item_id, presence: true
  validates :item_id, numericality: { only_integer: true }
end

