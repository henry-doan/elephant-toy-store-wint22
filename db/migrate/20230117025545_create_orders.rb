class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :order_quantity
      t.float :order_cost
      t.integer :order_number
      t.datetime :est_shipping
      t.string :address
      t.boolean :processed
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
