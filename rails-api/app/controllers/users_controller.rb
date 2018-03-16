class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render :json => @user
    else
      render :json => {:status => 403, :error => "something wrong"}
    end
  end

  private
  def user_params
    # params.require(:user).permit(:email, :password, :password_confirmation)
    params.permit(:email, :password)

  end

  # def self.authenticate_with_credentials (email, password)
  #    user = User.where(email: (email)).take
  #    if user && user.authenticate(password)
  #      user
  #    end
  # end

end
