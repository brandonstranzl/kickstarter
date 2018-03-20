# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180315215426) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin", id: :serial, force: :cascade do |t|
    t.string "email", limit: 255
  end

  create_table "categories", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "demos", force: :cascade do |t|
    t.text "name"
    t.date "live"
    t.text "description"
    t.integer "fundingreq"
    t.integer "votes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "featured"
    t.bigint "category_id"
    t.bigint "user_id"
    t.bigint "event_id"
    t.text "videos"
    t.index ["category_id"], name: "index_demos_on_category_id"
    t.index ["event_id"], name: "index_demos_on_event_id"
    t.index ["user_id"], name: "index_demos_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.text "name"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "migrations", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.integer "batch"
    t.datetime "migration_time"
  end

  create_table "migrations_lock", id: false, force: :cascade do |t|
    t.integer "is_locked"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "demo_id"
    t.index ["demo_id"], name: "index_orders_on_demo_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "survey", id: :serial, force: :cascade do |t|
    t.integer "admin_id"
    t.string "title", limit: 255
    t.string "description", limit: 255
    t.string "admin_link", limit: 255
    t.string "user_link", limit: 255
    t.string "question", limit: 255
    t.string "answer_1", limit: 255
    t.integer "score_1"
    t.string "answer_2", limit: 255
    t.integer "score_2"
    t.string "answer_3", limit: 255
    t.integer "score_3"
    t.string "answer_4", limit: 255
    t.integer "score_4"
  end

  create_table "users", force: :cascade do |t|
    t.text "name"
    t.text "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "username"
  end

  add_foreign_key "orders", "demos"
  add_foreign_key "orders", "users"
  add_foreign_key "survey", "admin", name: "survey_admin_id_foreign"
end
