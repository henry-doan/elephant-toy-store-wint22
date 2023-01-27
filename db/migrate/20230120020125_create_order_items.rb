class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.integer :item_id
      t.belongs_to :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
