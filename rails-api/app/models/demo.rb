class Demo < ApplicationRecord
  belongs_to :category
  belongs_to :event
  belongs_to :user

end
