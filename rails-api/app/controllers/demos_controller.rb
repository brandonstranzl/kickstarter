class DemosController < ApplicationController
  def index
    def index
        # render json: { message: "hello world"}, status: 200
        @demos = Demo.all
        render json: @demos, status: 200

    end

  end

  def new
  end

  def create
  end

  def edit
  end

  def delete
  end

  def show
  end

end
