Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :items do
      resources :reviews
    end
    resources :orders do
      resources :order_items
    end
    resources :wishlists
    
    resources :wishlists, except: [:index, :show, :create, :update, :destroy] do
      resources :wishlist_items
    end

    get "/featured", to: "items#featured"
    resources :newsletters

    resources :users, only: [:show]
    get "/allOrders", to: "orders#allOrders"
  end
end