Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'demos#index'

resources :demos
# get '/demos', to: 'demos#index'

resources :events, only: [:index, :create, :destroy] do
  resources :demos, only: [:show]
end

resources :users, only: [:create, :destroy]
# get '/signup' => 'users#new'
resources :sessions, only: [:create, :destroy]
# get '/logout' => 'sessions#destroy'
# post '/login' => 'sessions#create'
# get '/login' => 'sessions#new'


end
