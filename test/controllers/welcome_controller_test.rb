require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get aboutme" do
    get :aboutme
    assert_response :success
  end

  test "should get issues" do
    get :issues
    assert_response :success
  end

end
