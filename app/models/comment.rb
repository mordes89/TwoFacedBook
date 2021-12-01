class Comment < ApplicationRecord
   validates :body, :author_id, presence: true

   belongs_to :author,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :User

   belongs_to :parent_post,
      primary_key: :id,
      foreign_key: :parent_post_id,
      class_name: :Post

   has_one_attached :photo
end