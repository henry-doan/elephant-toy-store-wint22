class CreateWishlistItems < ActiveRecord::Migration[7.0]
  def change
    create_table :wishlist_items do |t|
      t.integer :item_id
      t.belongs_to :wishlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
