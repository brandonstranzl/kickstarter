class SessionsController < ApplicationController
  def new
  end

  def create

      user = User.find_by_username(params[:username])
      # If the user exists AND the password entered is correct.
      if user && user.authenticate(params[:password])
        # Save the user id inside the browser cookie. This is how we keep the user
        # logged in when they navigate around our website.
        session[:user_id] = user.id
        redirect_to '/', notice: "Logged in!"

      else
      # If user's login doesn't work, send them back to the login form.
        # notice: "incorrect username or password",
        # render "new"
        redirect_to '/sessions/new', notice: "username and email do not match"
      end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end





end
