class Api::WishlistsController < ApplicationController
  before_action :set_wishlists, only: [:show, :update, :destroy]

  def index
    render json: current_user.wishlists
  end

  def show
    render json: @wishlist
  end

  def create
    @wishlist = current_user.wishlists.new(wishlists_params)
    if @wishlist.save
      render json: @wishlist
    else
      render json: { errors: @wishlist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @wishlist.update(wishlists_params)
      render json: @wishlist
    else
      render json: { errors: @wishlist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @wishlist.destroy
    render json: { message: 'Wishlist Deleted'}
  end

  private
    def set_wishlists
      @wishlist = current_user.wishlists.find(params[:id])
    end

    def wishlists_params
      params.require(:wishlist).permit(:wishlist_name, :wish_total, :wish_item_quantity)
    end
end

