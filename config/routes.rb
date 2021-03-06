Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]  
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :show, :create, :destroy, :update]
    resources :comments, only: [:index, :show, :create, :destroy, :update]
    resources :likes, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
