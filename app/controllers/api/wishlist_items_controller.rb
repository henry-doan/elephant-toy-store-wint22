class Api::WishlistItemsController < ApplicationController
  before_action :set_wishlists
  before_action :set_wishlist_items, only: [:show, :update, :destroy]
  def index
    render json: @wishlist.wishlist_items
  end

  def show
    render json: @wishlist_item
  end

  def create
    @wishlist_item = @wishlist.wishlist_items.new(wishlist_item_params)
      if @wishlist_item.save
        render json: @wishlist_item
      else
        render json: { errors: wishlist_item.errors }, status: :unprocessable_entity
      end
  end

  def update
    if @wishlist_item.update(wishlist_item_params)
      render json:
    else  
      render json: {errors: @wishlist_item.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @wishlist_item.destroy
    render json: { message: "bye bye wishlist_item"}
  end

  private 
    def wishlist_item_params
      params.require(:wishlistitem).permit(:item_id)
    end
    
    def set_wishlists
      @wishlist = Wishlist.find(params[:wishlist_id])
    end
  
    def set_wishlist_items
      @wishlist_item= @wishlist.wishlist_items.find(params[:id])
    end
end
