class SessionsController < ApplicationController
  def new

  end

  def create
      user = User.where(email: params[:email]).take
      # If the user exists AND the password entered is correct:
      # can use this line below with function from User model:
      # if user = User.authenticate_with_credentials(params[:email], params[:password])
      # or can use this line without the function from user model:
      if user && user.authenticate(params[:password])

        # Save the user id inside the browser cookie. This is how we keep the user
        # logged in when they navigate around our website.
        session[:user_id] = user.id
        redirect_to '/', notice: "Logged in!"
      else
      # If user's login doesn't work, send them back to the login form.
        # notice: "incorrect username or password",
        # render "new"
        render :json => {:status => 401, :error => "something wrong"}
      end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end





end
