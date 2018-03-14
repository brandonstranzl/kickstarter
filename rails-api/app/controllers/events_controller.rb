class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /events
  def index
    @events = Event.includes(:demos).all
    render json: @events.to_json(include: [:demos])
  end

  # GET /events/:id
  def show
    render json: {data: @event}
  end

  # POST /event I AM NOT SURE WHAT LOCATION: @EVENT DOES
  def create
    # POST /clients
  @event = Event.new(params) #demo_params
    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/:id
  def update
    if @event.update(params) #demo_params
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  def destroy
    @event.destroy
  end

  private
  # # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def event_params
    params.require(:event).permit(:name,
      :date)
  end

end
