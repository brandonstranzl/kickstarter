# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

## CATEGORIES

Order.destroy_all
User.destroy_all

user = User.create!([
{
  name: "Jazz",
  email: "jazz@jazz.com",
  password_digest: BCrypt::Password.create("password")
},
{
  name: "Brandon",
  email: "brandon@brandon.com",
  password_digest: BCrypt::Password.create("password")
},
{
  name: "Cookie Monster",
  email: "cookiemonster@sesamestreet.com",
  password_digest: BCrypt::Password.create("password")
},
{
  name: "Marty McFly",
  email: "Marty@marty.com",
  password_digest: BCrypt::Password.create("password")
}
])



puts "Finding or Creating Categories ..."

Category.destroy_all

category = Category.create([
  {
    name: "Web Apps",
    description: "Leading edge Full Stack Applications."
  },
  {
    name: "iOT Apps",
    description: "ioT, robots, smart-devices and more."
  },
  {
    name: "iOS Apps",
    description: "The best apps to make you smile."
  },
  {
    name: "UI/UX Apps",
    description: "Seamless integration to users."
  }
])

categories = Category.all.to_a

puts "Re-creating events ..."

Event.destroy_all

event = Event.create([
  {
    name: "Hacker Stack Labs Demo Day",
    date: "2017-03-31",
  },
  {
    name: "LHL Toronto",
    date: "2018-04-22"
  },
  {
    name: "Brainstation",
    date: "2015-03-21"
  },
  {
    name: "HackerYou",
    date: "2014-04-01"
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

range = [*'0'..'9',*'A'..'Z',*'a'..'z', "_", "-"]

progress_percentage = rand()
puts progress_percentage


boredAtWork = ['RdIuza79Y_8', 'y0ZOFc28XB4', 'omuQKa1ouvY', 'BVZFXz48pXQ', 'PX8J8sKukb0', 'LyER2fcrz2A', 'zux5tE54Ato', 'zev5cO0CEjw', 'KKMO_EArmek', 'lVm0doLGaUU', '1ZprCi4C81U', 'aMEX_cGgNA8', 'qh40j51ynC4', 'wvpzfHZXVOg', 'PoMusI-nsX8', 'eAArChKXLr4', 'Ej5C55ycFlw', 'fDM9OFTgSp0', '_4KlF4iYscs', 'KXzVerrjjDc', 'twm_B6YgeXU', 'XnjY4vx44F8', '2TDBLzLYOtU', 'eBTA0dIFDXg', 'BqRhEwZOaDo', 'ZH6yk9Vmzn8', 'fVj4EkZk0xI', 'RiSiALelFHM', 'arwySyXxBcs', 'uL00y47qARI', 'pIYuhZ9_NnM', 'zdxcUwyMcKM', '3mCe3Hm_YUY', 'HYErn28ssDk', 'D-d5Cntjaig', 'COAOY0u1bRQ', '41dp9ASBQr8', 'v2hEYn9l9ys', 'BfsCJodberA', '8BZ4mbjK3-0', '0a8CHjUw1ao', 'R7MQ-GcAPfA', 'dwSIxcBHq5c', 'ceDsQM6zgGM', 'L7nTmBfbtZU', '-kPWs9EuisU', 'LLHwWbtGWm0', 'UFyHBpTP-Gs', 'jz7r945PH3M', 'AdFIcXhUMl4', 'mecxuavpaOY', '2YVfz6i7xMc', '7RJTMyx1HfY', 'AGCrtfjx-dU', '0QBf4WY5kA8', 'q4KZmYSH8jc', '8qH17X9JbMk', 'uG_hf8-YJzI', 'jH7Jfj-_7KI', '349WBjrTn2w', 'UPJLMSaV6DE', '2VjfZKzzEi0', 'e7f_WdsqVn4', 'qpBXPvVICd8', '6g9mGl4MXVU', 'fBQD7aPbEVg', 'N_o0mEDR1jQ', 'wYx1-E1sxu0', 'v561f9gLjsw', 'IbmfZ_Jk0tg', 'F__VtJiKrNs', 'M3BTZUq2NrU', 'VZOCXWvD0bk', 'CdImGcHrA5k', 'HkYlzl_tjJY', 'AubuNDfn15o', 'nn7XxINRGcs', 'aDRnHNsj07w', 'jl7wIDtsp4o', 'HvFanqfaqDU', '3x5QyEEgJno', 'C1i6VctYVSs', 'bVI9gt7PNPU', 'QzNLNthf1g0', 'oPBZf1Ue9A0', '_2D-It8FNpM', 'hjGYtSP2rxc', 'Xon71-UXJ9Y', 'gXSvW7ykxuw', '-jg5ttqqWIg', 'TeRK0ULaZWY', 'CGuUmB_Ur_A', 'uACmXQvvaTs', 'WM7iqwWJAHk', 'fvjy7SGBAzE', 'jNGRkTSZ7dU', 'w8EUjTgDZas', 'Qm5h93Vpr60', 'dwl6s7juDJs', 'BTjI1uZEUqY', 'sdbPpGT-3SA', '-EZgajAnu3o', '5dM2aO-YiVc', '9XIqJBvV3uk', 'UnVQ-V29AmA', 'C7QXA_Q5gdA', 'yKY_096tJ08', 'zY0D2OE8CAU', 'IxUJDWlqa0I', 'P7FlWve-lZM', 'XgbgNhLQQ44', 'y7RVQstp2Eo', 'Dx8c7c82VM0', 'BxXp7KwIVOI', 'GK1z1NfQcpA', 'KAh85LGznZw', 'XitGqHybQK8', 'QjRFr5ioERo', 'QwBF33EKIFA', 'pYYEDf29XOE', '4B-fOMqWxAo', '4rQiPptSBnw', 'FUq-gjjTPeI', 'Y2H1Q_AzFpE', 'SXvOh1dpSQM', '_lrjYeAgDoM', 'KPYe5343jdQ', 'xKN0Yxcpeh8', 'K-aIqitqQE4', 'Xq3YtkL3QV8', 'Yl1JFb8SODQ', 'rjO7nKD0e10', 'UAi0dm97btA', '4h3UTpwJnCY', 'Hcqplp8If3I', 'sPB7J-LM15k', 'glFznyRlAJc', 'QI0skvjoNlQ', 'LMAHCzKXMrg', 'wkRIRnKT__U', 'TROuUF39yHA', 'V-HPMf_PVEg', 'q07PpcltaQI', 'A6ckz_J_EUo', 'gjwCyGz-5PQ', 'q3MaKRpm2xE', '7Ed4A8b8jGs', 'i3Y8X6PxmIE', 'UFDhlVV_ZFg', 'YjtBNbHAfZs', 'lsxF8kJEjuE', 'bOMfwwDtQow', '8HmgiF4VxuA', 'kW-T095Vy1k', '-xV9WLtQtnc', '3vfjEN786M4', 'R0OFOphjFSg', 'iVMhO_jpJfI', 'EF8LhYIB5kw', '8x7sFttRTUM', 'uEN6Fc1Ffy0', 's_xK4GdEG0w', '9_Gu3F_PouQ', 'B7L_u6rUVgw', 'k3xTCwIk3Yw', 'KVx2W2cwgVY', 'jrvzLBN-gow', 'KvTfF6zbc-s', '-eUf-WPI9yU', 'TNd87mWclao', 'sSTZTLtsBV0', 'SDufI52R92w', 'oICWbliDSzc', 'HjzBW1KYy7Y', 'dVqtoRHMLAc', 'jpHHyTEkVbs', 'OAryW_uvFFg']
tedTalk = ['OIlSXRC-B-I', 'USnf5kbsMlg', 'OEydHbngSz0', 'wOsQKjNoHmw', 'Aw_1mOwx5gM', 'jk6Y3f2c4-I', '1tcqfWki-hw', 'EV3OmxrowWE', 'guXxy8LH2QM', 'twWkGt33X_k', 'yeVU2Ff4ffc', 'TFgtI7nt6Q4', 'YsXg3J1x4OY', 'Cprp_EjVtwA', '1oNlTrLIjU4', 'Y0UB6g8Rsyw', 'mgcjr1yz7ow', '5ErKrSyUpEo', 'ZivM_83PBU0', 'atKSMfx4E3I', 'wmE8dQcZgB4', 'wmMrZyVANUo', 'PfWGiu0jGv0', 'PbgB2TaYhio', 'hQigUH0vZSE', 'k0GQSJrpVhM', 'iclWth_VvBs', 'NcmxEPOQQzg', '5RAJvzV9j-o', 'R84vqXjXWJc', 'pgmiPXAwiLg', 'b4k-KPELNcc', 'NDQ1Mi5I4rg', 'ZJPdJuhI03U', '20adDr7Felw', '7LE4MoJ-2po', 'mT4Qbp89nIQ', '8UhqkX2VAmo', '_7t6Ry4PlTo', 'tbvUCrS5_5I', '85hbMtegrLc', 'yg8SBuTuoKk', 'C6mNITMY7e0', 'JoGCaI1HzYo', 'RtFFT4zjyTM', 'ZpT0cw9bmiw', 'ZzugJPASNB8', 'dDZoGcQVjJg', '-mhe7COLiR0', 'j4LSwZ05laQ', 'LhszKevcH30', '6oLsJUH1cfU', 'a17Z5Sk2XJY', 't6eFzt6kFGE', 'jKM0jlPW8x0', 'S-3qnZrVy9o', 'oHDq1PcYkT4', 'dOt4NkcmIUg', '4tQee2_JgUo', 'F0ofeD8VKMA', 'VMXdSkW6hns', 'O13KwsyDqeE', 'nLB8A--QdHc', 'ER0G2S9r7aE', '0gks6ceq4eQ', 'M0-b-z5Le10', 'XZiNVGA78kA', 'itLUXZnLRn8', 'u4L130DkdOw', 'YATYsgi3e5A', 'mLufqwmPl1A', 'fWqKalpYgLo', '55yGmKc6WfE', 'jtVIDBs60S8', 'j_GzkjHtFiA', 'aupPrDnhrKA', 'G88JZ1DIdg8', 'Kab-mpU-YVM', 'FQfWKSdIreM', '1U2qMRGihGg', 'Cetg4gu0oQQ', '5UH7uTpTa44', 'QijH4UAqGD8', 'CiLn-GrcuEs', 'J6tgYBMXR6s', 'bZsn1_DARRs', 't8R_GKS-M2Y', '73rUjrow5pI', '2wseM6wWd74', 'uL5XUwfkxZw', 'JrRRvqgYgT0', 'coHWLitlm-U', 'xRL2vVAa47I', 'd0a0eXJ5TJM', 'F5h6ynoq8uM', 'g-ONUFFt2qM', 'A_xXC37CDSw', 'a6Qvzp516gY', '_bm98rrVZzE', '5nys6iebjHw', 'HbQZ7jAvgoI', 'y1yK36RMyRE', 'mGbMwP8MDjg', 'Sv5QitqbxJw', 'xAXUq-Qc8DI', '_CEKKHyxgaw', 'O6Vayv9FCLM', 'HX17MXvwYHo', '5w5BhwLzoqg', '9y7YEmyz-Do', 'HNMQ_w7hXTA', 'Mt0PiXLvYlU', 'rtcrqLWZr_0', 'QPC5_P2_Fu8', 'DJGreSgaOTc', 'iFTWM7HV2UI', 'z3kdIL_EbQU', 'swB7Ivct8d8', 'lPtPG2lAmm4', 'ZSEO3dpAs5w', '2BVSEnJte84', 'Uq1idqpX9-A', 'Q-sK-s_TzN0', 'hfznpykprP0', 'a4ZBzM3L6ws', '0-FkPxSc_M4', 'yNhu0MG_2MA', 'Qd5rAVHT6Vw', 'qWNae7vYK6s', '8nbeD1mwCdo', '_B9A3J70IPQ', 'B905LapVP7I', 'Ogce5D2XMZ0', 'pvBlSFVmoaw', '28sa2zGgmwE', 'iU1bhHeCkoU', 'KCr8s57hdzY', 'OzA6jRYjVQs', 'shG0ezBeeJc', '3o655tLnik0', 'oEIYHTlbeLA', '0txtVkBUdSQ', '8Dv2Hdf5TRg', 'ZL-6MeYBeUs']

50.times do
Demo.create([
  {
    name: Faker::Company.name,
    live: events[rand(0..3)].date,
    description: Faker::Company.catch_phrase,
    fundingreq: rand(2000000/100),
    votes: rand(300),
    videos: tedTalk.sample,
    category: categories[rand(0..3)],
    event: events[rand(0..3)],
    user: users[rand(0..3)],
    progress: rand(300000/100)
  }
])
end

50.times do
Demo.create([
  {
    name: Faker::SiliconValley.company,
    live: events[rand(0..3)].date,
    description: Faker::SiliconValley.motto,
    fundingreq: rand(2000000/100),
    votes: rand(300),
    videos: boredAtWork.sample,
    category: categories[rand(0..3)],
    event: events[rand(0..3)],
    user: users[rand(0..3)],
    progress: rand(300000/100)
  }
])
end

puts Demo.all.as_json

demo = Demo.create([
  {
    name: "Bytesoft",
    live: events[rand(0..3)].date,
    description: "Focusing on software for business and consumer solutions.",
    fundingreq: rand(2000000/100),
    votes: rand(300),
    videos: 'WRduVfYXjI8',
    category: categories[1],
    event: events[0],
    user: users[0],
    progress: rand(2000000/100)
  },
  {
    name: "Pear",
    live: "01-01-2021",
    description: "The makers of innovative smart devices with amazing UI and UX.",
    fundingreq: 8000,
    votes: 10,
    videos: '3H-Y-D3-j-M',
    category: categories[3],
    event: events[0],
    user: users[0],
    progress: 1
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
    user: users[0],
    progress: 1
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
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
    progress: 1,
    user: users[0]
  },
  {
    name: "Readit",
    live: "2005-06-23",
    description: "The best online community. EVER.",
    fundingreq: 2308,
    votes: 79,
    videos: 'sf9tBmMfFcw',
    progress: 1,
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
    progress: 1,
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
    description: "A revolutionary company specializing in electric vehicles, battery packs, and solar panels.",
    fundingreq: 1864,
    votes: 96,
    videos: 'cJ9Xep22oEY',
    category: categories[1],
    event: events[0],
    user: users[0],
    progress: 1
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
    user: users[0],
    progress: 1
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
    user: users[0],
    progress: 1
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
    user: users[0],
    progress: 1
  }
])
