class User < ApplicationRecord
  attr_accessor :password
  has_secure_password
  # validates :password, length: { minimum: 6 }, allow_nil: true
  validates_uniqueness_of :email, case_sensitive: false
  validates :name, :email, presence: true

  has_many :demos

  # def self.authenticate_with_credentials (email, password)
  #    user = User.where(email: (email)).take
  #    if user && user.authenticate(password)
  #      user
  #    end
  # end
end
