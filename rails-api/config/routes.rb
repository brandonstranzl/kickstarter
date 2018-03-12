Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'demos#index'

resources :demos
# get '/demos', to: 'demos#index'

resources :events, only: [:index] do
  resources :demos, only: [:show]
end

resources :users, only: [:new, :create, :destroy]
# get '/signup' => 'users#new'
resources :sessions, only: [:new, :create, :destroy]
# get '/logout' => 'sessions#destroy'
# post '/login' => 'sessions#create'
# get '/login' => 'sessions#new'


end
