# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## CATEGORIES

puts "Finding or Creating Categories ..."

category = Category.create([
  {
    name: "Applications",
    description: "the latest software and web apps"
  },
  {
    name: "Hardware",
    description: "amazing robots and gadgets"
  }
])

categories = Category.all.to_a

puts "Re-creating Demos ..."

Demo.destroy_all

demo = Demo.create([
  {
    name: "Kickstarter",
    live: "2018-03-31",
    description: "this is a crowdfunding web app",
    fundingreq: 10000,
    votes: 5,
    category: categories.sample
  },
  {
    name: "Tweeter",
    live: "2018-03-31",
    description: "this is a twitter clone messenger",
    fundingreq: 8000,
    votes: 10,
    category: categories.sample
  }
])
