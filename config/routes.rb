Rails.application.routes.draw do
  devise_for :users
  root "landing#show"
  resource :dashboard, only: [:show]
  resources :parcels, only: [:new]
  resources :shipments, only: [:create, :show, :new, :update]
  resource :profile, only: [:update]
  resource :location, only: [:update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

