class Like < ApplicationRecord
   validates :parent_post_id, :liker_id, presence: true

   belongs_to :liker,
      primary_key: :id,
      foreign_key: :liker_id,
      class_name: :User

   belongs_to :parent_post,
      primary_key: :id,
      foreign_key: :parent_post_id,
      class_name: :Post
end
