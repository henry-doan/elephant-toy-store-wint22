class Api::ReviewsController < ApplicationController
  before_action :set_items
  before_action :set_reviews, only: [:show, :update, :destroy]

  def index
    render json: @item.reviews
  end

  def show
    render json: @review
  end

  def create
    @review = @item.reviews.new(reviews_params)
    @review.user_id = current_user.id
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
    def set_items
      @item = Item.find(params[:item_id])
    end

    def set_reviews
      @review = @item.reviews.find(params[:id])
    end

    def reviews_params
      params.require(:review).permit(:rating, :comment)
    end
end
