class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/' , notice: "Thank you for signing up! You are now logged in! Enjoy the Demos!"
    else
      redirect_to '/users/new', notice: @user.errors.full_messages
    end
  end

private
def user_params
  params.require(:user).permit(:name, :email, :username, :password, :password_confirmation)
end

end
