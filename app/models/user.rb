class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true


  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like

  has_one_attached :profile_photo
  has_one_attached :cover_photo


  after_initialize :ensure_session_token
  attr_reader :password


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
 
