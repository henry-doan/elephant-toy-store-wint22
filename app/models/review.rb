class Review < ApplicationRecord
  belongs_to :user
  belongs_to :item
  validates :rating, :comment, presence: true
end
