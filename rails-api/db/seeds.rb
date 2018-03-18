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
  },
  {
    name: "LHL Toronto",
    date: "2018-03-22"
  },
  {
    name: "Brainstation",
    date: "2018-03-21"
  },
  {
    name: "HackerYou",
    date: "2018-04-01"
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
    live: "1975-04-04",
    description: "Focusing on software for business and consumer solutions.",
    fundingreq: 5500,
    votes: 5,
    videos: 'WRduVfYXjI8',
    category: categories[2],
    event: events[1],
    user: users[0]
  },
  {
    name: "Pear",
    live: "1976-04-01",
    description: "The makers of innovative smart devices with amazing UI and UX.",
    fundingreq: 8000,
    votes: 10,
    videos: '3H-Y-D3-j-M',
    category: categories[1],
    event: events[0],
    user: users[0]
  },
  {
    name: "LaggerGram",
    live: "2016-10-06",
    description: "Share your throwback photos with your friends and the world.",
    fundingreq: 2300,
    votes: 60,
    videos: 'KAC_JAnhspw',
    category: categories[0],
    event: events[1],
    user: users[0]
  },
  {
    name: "Book of Faces",
    live: "2004-02-04",
    description: "Connect with all your college mates and find out creepy things about them.",
    fundingreq: 8104,
    votes: 7,
    videos: 'WzgNAN3dW-I',
    category: categories[0],
    event: events[3],
    user: users[0]
  },
  {
    name: "A2Z",
    live: "2018-03-31",
    description: "We are an e-commerce platform that sells virtually everything from A to Z.",
    fundingreq: 4938,
    votes: 60,
    videos: 'BhKEOYsOSds',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "Pied Piper",
    live: "2014-04-06",
    description: "Middle out compression algorithm",
    fundingreq: 4682,
    votes: 39,
    videos: '7m2j_0ivw2I',
    category: categories[2],
    event: events[3],
    user: users[0]
  },
  {
    name: "Chillflix",
    live: "1997-08-29",
    description: "On demand movies and tv shows served from the cloud. You'll spend more time finding than watching.",
    fundingreq: 6103,
    votes: 81,
    videos: 'tCn4hdTI2jc',
    category: categories[0],
    event: events[1],
    user: users[0]
  },
  {
    name: "Ober",
    live: "2018-03-31",
    description: "InsertCompanyDescription",
    fundingreq: 3718,
    votes: 54,
    videos: 'PE7M-obxSvg',
    category: categories[0],
    event: events[1],
    user: users[0]
  },
  {
    name: "Food Grab",
    live: "2014-12-31",
    description: "Have your food ready for you when you arrive.",
    fundingreq: 1982,
    votes: 14,
    videos: 'xem76O8Tsx0',
    category: categories[0],
    event: events[1],
    user: users[0]
  },
  {
    name: "iBay",
    live: "1995-09-03",
    description: "Online auction site where users can bid on products and sell their own items.",
    fundingreq: 4524,
    votes: 28,
    videos: 'E22BbbEZAaw',
    category: categories[0],
    event: events[2],
    user: users[0]
  },
  {
    name: "MoneyPal",
    live: "1998-12-01",
    description: "Securely complete online transactions with your credit card or bank",
    fundingreq: 5985,
    votes: 64,
    videos: 'so9uIkFKCnc',
    category: categories[0],
    event: events[2],
    user: users[0]
  },
  {
    name: "Rectangle",
    live: "2009-02-01",
    description: "Accept card payments virtually anywhere",
    fundingreq: 1650,
    votes: 58,
    videos: 'NfCFAsJsNp8',
    category: categories[1],
    event: events[0],
    user: users[0]
  },
  {
    name: "Tweeter",
    live: "2006-03-21",
    description: "Share your thoughts with the world in 140 characters or less.",
    fundingreq: 4001,
    votes: 32,
    videos: 'SBDYYGER5iM',
    category: categories[0],
    event: events[1],
    user: users[0]
  },
  {
    name: "Readit",
    live: "2005-06-23",
    description: "The best online community. EVER.",
    fundingreq: 2308,
    votes: 79,
    videos: 'sf9tBmMfFcw',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "DropStorage",
    live: "2007-06-01",
    description: "Cloud storage solutions for consumers and enterprises.",
    fundingreq: 6215,
    votes: 41,
    videos: 'zjSFC6pPkyk',
    category: categories[0],
    event: events[0],
    user: users[0]
  },
  {
    name: "Hooli",
    live: "2014-04-06",
    description: "We're more than the chat, mail, search and phone. We are making the world a better place.",
    fundingreq: 1906,
    votes: 53,
    videos: 'h6SQjKRAaGI',
    category: categories[2],
    event: events[0],
    user: users[0]
  },
  {
    name: "ElonMotors",
    live: "2018-03-31",
    description: "A revolutionary company specializing in electric vehicles and energy solutions such as battery packs and solar panels.",
    fundingreq: 1864,
    votes: 96,
    videos: 'cJ9Xep22oEY',
    category: categories[1],
    event: events[0],
    user: users[0]
  },
  {
    name: "PicChat",
    live: "2012-10-29",
    description: "Share your day via disappearing videos and pictues.",
    fundingreq: 4483,
    votes: 87,
    videos: 'ykGXIQAHLnA',
    category: categories[0],
    event: events[2],
    user: users[0]
  },
  {
    name: "Musicify",
    live: "2008-10-07",
    description: "On demand songs curated to your music taste.",
    fundingreq: 9771,
    votes: 7,
    videos: 'zVHR1Ol7K5U',
    category: categories[0],
    event: events[0],
    user: users[0]
  },
  {
    name: "Exphone",
    live: "1938-03-01",
    description: "We make phones that can explode at any time.",
    fundingreq: 1292,
    votes: 79,
    videos: 'yvLJd7VzYOE',
    category: categories[1],
    event: events[2],
    user: users[0]
  }
])
