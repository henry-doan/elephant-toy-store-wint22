class Api::NewslettersController < ApplicationController
  before_action :set_newsletter, only: [:show, :update, :destroy]

  def index
    render json: Newsletter.all
  end
  
  def show
    render json: @newsletter
  end

  def create
    @newsletter = Newsletter.new(newsletter_params)
    if @newsletter.save
      render json: @newsletter
    else
      render json: { errors: @newsletter.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @newsletter.update(newsletter_params)
      render json: @newsletter
    else
      render json: { errors: @newsletter.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @newsletter.destroy
    render json: { message: 'Subscriber Info Deleted' }
  end

  private
  def newsletter_params
    params.require(:newsletter).permit(:email, :subscriber_name)
  end

  def set_newsletter
    @newsletter = Newsletter.find(params[:id])
  end
end
