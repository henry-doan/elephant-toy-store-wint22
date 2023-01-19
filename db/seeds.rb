User.delete_all
Item.delete_all

@counter = 1
5.times do
  user = User.create(
    name: Faker::Games::SuperMario.character,
    email: "test#{@counter}@test.com",
    password: 'password'
  )
  @counter += 1
end

30.times do
  item = Item.create(
    item_name: Faker::FunnyName.name,
    description: Faker::Food.description,
    cost: Faker::Number.between(from: 0.0, to: 100),
    quantity: Faker::Number.between(from: 1, to: 10),
    category: Faker::FunnyName.name,
    discount: Faker::Number.between(from: 0.0, to: 0.99),
    brand: Faker::Food.fruits
  )
end

puts("#{Item.all.count} items created")


