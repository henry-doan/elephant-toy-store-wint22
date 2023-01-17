class Api::ReviewsController < ApplicationController
  before_action :set_reviews, only: [:show, :update, :destroy]

  def index
    render json: current_user.reviews
  end

  def show
    render json: @review
  end

  def create
    @review = current_user.reviews.new(reviews_params)
    if @review.save
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(reviews_params)
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @review.destroy
    render json: { message: 'Review Deleted'}
  end

  private
    def set_reviews
      @review = current_user.reviews.find(params[:id])
    end

    def reviews_params
      params.require(:review).permit(:rating, :comment)
    end
end
