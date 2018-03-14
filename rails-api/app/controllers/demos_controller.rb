#New is the precursor action to render a form, that upon submitting,
# runs the Create action. (the view is typically redirected back to the
# index view showing a list of similar items you already created)

# Edit is the precursor action to render a form, that upon submitting,
# runs the Update action. (the view is typically redirected back to the
# index view showing a list of similar items you already created)

class DemosController < ApplicationController
  before_action :set_demo, only: [:show, :update, :destroy]
  # before_filter :authorize

  # GET /demos
  def index
        @demos = Demo.includes(:category).all
        render json: @demos.to_json(include: :category), status: 200
  end

  # GET /demos/:id
  def show
    render json: {data: @demo}
  end

  # POST /demos
  def create
    # POST /clients
  @demo = Demo.new(params) #demo_params
    if @demo.save
      render json: @demo, status: :created, location: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clients/1
  def update
    if @client.update(params) #demo_params
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  def destroy
    @client.destroy
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
      :votes, :featured, :category_id, :user_id, :event_id)
  end

end
