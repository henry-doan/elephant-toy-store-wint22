Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :items
    resources :reviews
    resources :orders do
      resources :order_items
    end
    resources :wishlists do
      resources :wishlist_items
    end
    resources :orders 
    resources :wishlists
  end
end