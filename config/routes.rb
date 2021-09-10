Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create] #:new, :index, :show, :edit, :destroy, 
    resource :session, only: [:create, :destroy, :show]
    resource :posts, only: [:index, :show, :create, :destroy, :update]
  end

  root "static_pages#root"
end
