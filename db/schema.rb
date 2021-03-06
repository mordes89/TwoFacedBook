# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_18_152454) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "add_edits", force: :cascade do |t|
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "parent_post_id", null: false
    t.integer "num_likes", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "edit", default: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["parent_post_id"], name: "index_comments_on_parent_post_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "parent_post_id", null: false
    t.integer "liker_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["liker_id"], name: "index_likes_on_liker_id"
    t.index ["parent_post_id"], name: "index_likes_on_parent_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "num_likes"
    t.integer "num_comments"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email", null: false
    t.string "first_name"
    t.string "last_name"
    t.text "work"
    t.string "school"
    t.string "relationship"
    t.text "bio"
    t.string "originally_from"
    t.string "address"
    t.string "joinedTFB"
    t.string "birthday"
    t.index ["address"], name: "index_users_on_address"
    t.index ["bio"], name: "index_users_on_bio"
    t.index ["birthday"], name: "index_users_on_birthday"
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["joinedTFB"], name: "index_users_on_joinedTFB"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["originally_from"], name: "index_users_on_originally_from"
    t.index ["relationship"], name: "index_users_on_relationship"
    t.index ["school"], name: "index_users_on_school"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["work"], name: "index_users_on_work"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
