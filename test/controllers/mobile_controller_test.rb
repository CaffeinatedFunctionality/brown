require 'test_helper'

class MobileControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get bio" do
    get :bio
    assert_response :success
  end

  test "should get soil_and_water" do
    get :soil_and_water
    assert_response :success
  end

  test "should get issues" do
    get :issues
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
