class CreateWishlists < ActiveRecord::Migration[7.0]
  def change
    create_table :wishlists do |t|
      t.float :wish_total
      t.integer :wish_item_quantity
      t.string :wishlist_name
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
