User.delete_all
Item.delete_all

@counter = 1
5.times do
  user = User.create(
    name: Faker::Games::SuperMario.character,
    email: "test#{@counter}@test.com",
    password: 'password',
    admin: false
  )
  @counter += 1
end

30.times do
  brands = [ 'Disney', 'Lego', 'Barbie']
  categories = ['Learning', 'Sports','Art']
  item = Item.create(
    item_name: Faker::FunnyName.name,
    description: Faker::Food.description,
    cost: Faker::Number.between(from: 0.0, to: 100),
    quantity: Faker::Number.between(from: 1, to: 10),
    category: categories.sample ,
    discount: Faker::Number.between(from: 0.0, to: 0.99),
    brand: brands.sample ,
    image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  )
end


puts("#{Item.all.count} items created")


