class UsersController < ApplicationController

  def new
  end

  def create
    @user = User.new(params)
    if @user.save && @user.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = @user.id
      redirect_to '/' , notice: "You are now logged in! Enjoy the Demos!"
    else
      render :json => {:status => 400, :error => "something is wrong with info entered"}
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :username, :password)
  end

  # def self.authenticate_with_credentials (email, password)
  #    user = User.where(email: (email)).take
  #    if user && user.authenticate(password)
  #      user
  #    end
  # end

end
