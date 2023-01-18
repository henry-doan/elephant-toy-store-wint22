class Api::OrdersController < ApplicationController
  before_action :set_orders, only: [:show, :update, :destroy]


  def index
    render json: current_user.orders
  end

  def show
    render json: @order
  end

  def create
  @order = current_user.orders.new(orders_params)
  if @order.save
    render json: @order
  else
    render json: { errors: @order.errors }, status: :unprocessable_entity
    end
  end

  def update
  if @order.update(orders_params)
    render json: @order
  else
    render json: { errors: @order.errors }, status: :unprocessable_entity
    end
  end

  def destroy
  @order.destroy
  render json: { message: 'Order Deleted'}
  end

  private
    def set_orders
      @order = current_user.orders.find(params[:id])
    end

  def orders_params
    params.require(:order).permit(:order_cost, :order_quantity, :est_shipping, :address, :processed, :order_number)
  end
end
