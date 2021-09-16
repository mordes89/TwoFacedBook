class Post < ApplicationRecord
   validates :body, :author_id, presence: true

   belongs_to :author,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :User

   has_many :comments,
      primary_key: :id,
      foreign_key: :parent_post_id,
      class_name: :Comment

   has_one_attached :photo
end
