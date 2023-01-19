Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :items
    resources :reviews
    resources :orders
  end
  resources : wishlists: [:index, :show, :create, :update, :destroy] do
      resources :wishlist_items
    end
end
