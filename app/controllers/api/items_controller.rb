class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: Item.all
  end
  
  def show
    render json: @item
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
    render json: { message: 'item deleted' }
  end

  private
  def item_params
    params.require(:item).permit(:item_name, :description, :cost, :quantity, :category, :discount, :brand, :image)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
