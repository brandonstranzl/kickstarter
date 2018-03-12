class DemosController < ApplicationController
  before_action :set_demo, only: [:show, :update, :destroy]


  def index
      :authorize
      @demos = Demo.all
      @categories = Category.all
      @cats_and_demos = [@categories, @demos]
      render json: @demos, status: 200
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
    render json: {data: @demo}
  end

  private
  # # Use callbacks to share common setup or constraints between actions.
  def set_demo
    @demo = Demo.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def demo_params
    params.require(:demo).permit(:name,
      :live, :description, :fundingreq,
      :votes, :featured, :category_id, :user_id)
  end

end
