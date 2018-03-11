Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'demos#index'

get '/demos', to: 'demos#index'

resources :users, only: [:new, :create, :destroy]
# get '/signup' => 'users#new'
resources :sessions, only: [:new, :create, :destroy]
# get '/logout' => 'sessions#destroy'
# post '/login' => 'sessions#create'
# get '/login' => 'sessions#new'


end
