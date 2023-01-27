class Newsletter < ApplicationRecord
  validates :email, :subscriber_name, presence: true
end
