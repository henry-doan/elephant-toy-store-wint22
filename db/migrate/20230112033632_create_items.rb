class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :item_name
      t.text :description
      t.float :cost
      t.integer :quantity
      t.string :category
      t.float :discount
      t.string :brand

      t.timestamps
    end
  end
end
