class Api::OrderItemsController < ApplicationController
  before_action :set_orders

  def index
    render json: @order.order_items
  end

  def create
    @order_item = @order.order_items.new(order_item_params)
    if @order_item.save
      render json: @order_item
    else
      render json: { errors: @order_item.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @order_item = @order.order_item.update(order_item_params)
      render json: @order_item
    else
      render json: { errors: @order_item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    render json: { message: "removed" }
  end

  private
  def set_orders
    @order = Order.find(params[:order_id])
  end

  def order_item_params
    params.require(:orderItem).permit(:item_id)

  end
end
