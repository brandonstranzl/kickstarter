class CategoriesController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /categ
  def index
    @categories = Category.includes(:demos).all
    render json: @categories.to_json(include: [:demos])
  end

  # GET /events/:id
  def show
    render json: @category.to_json(include: [:demos])
  end

  # POST /event I AM NOT SURE WHAT LOCATION: @category DOES
  def create
    # POST /clients
  @category = Event.new(category_params) #see below for definition of category_params
    if @category.save
      render json: @category, status: :created, location: @category
    else
      render json: @category.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/:id
  def update
    if @category.update(category_params) ##see below for definition of category_params
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/:id
  def destroy
    @category.destroy
    render json: {data: 'destroyed'}
  end

  private
  # # Use callbacks to share common setup or constraints between actions.
  def set_event
    @category = Category.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def category_params
    params.require(:category).permit(:name,
      :description)
  end

end
