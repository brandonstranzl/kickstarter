# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## CATEGORIES
User.destroy_all

user = User.create!({
  name: "Jazz",
  email: "jazz@jazz.com",
  password_digest: BCrypt::Password.create("password")
})

puts "Finding or Creating Categories ..."

Category.destroy_all

category = Category.create([
  {
    name: "Applications",
    description: "the latest software and web apps"
  },
  {
    name: "Hardware",
    description: "amazing robots and gadgets"
  },
  {
    name: "Software",
    description: "cool software for users"
  }
])

categories = Category.all.to_a

puts "Re-creating events ..."

Event.destroy_all

event = Event.create([
  {
    name: "Hacker Stack Labs Demo Day",
    date: "2018-03-31",
  }
  ])

events = Event.all.to_a

puts "Re-creating users ..."

# User.destroy_all

# user = User.create([
#   {
#     name: "Jazz",
#     email: "jazz@jazz.com",
#     password_digest: BCrypt::Password.create('password')
#   }
#   ])

users = User.all.to_a

puts "Re-creating Demos ..."

Demo.destroy_all

demo = Demo.create([
  {
    name: "Bytesoft",
    live: "2018-03-31",
    description: "this is goign to be really big even though i am a nerd",
    fundingreq: 10000,
    votes: 5,
    videos: 'WRduVfYXjI8',
    category: categories[0],
    event: events[0],
    user: users[0]
  },
  {
    name: "Clementine",
    live: "2018-03-31",
    description: "this is a twitter clone messenger",
    fundingreq: 8000,
    votes: 10,
    videos: '3H-Y-D3-j-M',
    category: categories[1],
    event: events[0],
    user: users[0]
  },
  {
    name: "LaggerGram",
    live: "2018-03-31",
    description: "Share your throwback photos with your friends and the world.",
    fundingreq: 40000,
    votes: 60,
    videos: 'KAC_JAnhspw',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Book of Faces",
    live: "2018-03-31",
    description: "Connect with all your college mates and find out creepy things about them.",
    fundingreq: 40000,
    votes: 60,
    videos: 'KAC_JAnhspw',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "A2Z",
    live: "2018-03-31",
    description: "We are an e-commerce platform that sells virtually everything from A to Z.",
    fundingreq: 40000,
    votes: 60,
    videos: 'KAC_JAnhspw',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Pied Piper",
    live: "2018-03-31",
    description: "",
    fundingreq: 40000,
    votes: 60,
    videos: 'KAC_JAnhspw',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Chillflix",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Ober",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Food Grab",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "iBay",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "MoneyPal",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Rectangle",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Tweeter",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Readit",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "DropStorage",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Hooli",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "ElonMotors",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "PicChat",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Musicify",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Exphone",
    live: "2018-03-31",
    description: "We make phones that can explode at any time.",
    fundingreq: 40000,
    votes: 60,
    videos: 'dQw4w9WgXcQ',
    category: categories[2],
    event: events[0],
    user: users[0]
  }
])
