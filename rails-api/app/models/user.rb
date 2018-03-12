class User < ApplicationRecord
  has_secure_password

  validates :password, length: { minimum: 6 }

  validates_uniqueness_of :email, case_sensitive: false
  validates :name, :email, :username, presence: true


  def authenticate_with_credentials(params)
      if user.email == params[:email] && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/', notice: "Logged in!"      # success logic, log them in
      else
        # failure, render login form
      redirect_to '/sessions/new', notice: "username and email do not match"
      end
  end
  
end
