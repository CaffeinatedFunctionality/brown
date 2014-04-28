class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # before_filter :check_for_mobile

  # private

  # def mobile_device?
  #   if session[:mobile_override]
  #     session[:mobile_override] == "1"
  #   else
  #     # Season this regexp to taste. I prefer to treat iPad as non-mobile.
  #     request.user_agent =~ /iPhone|iPod|Android|webOS|Mobile/
  #   end
  # end
  # helper_method :mobile_device?

  # def check_for_mobile
  #   session[:mobile_override] = params[:mobile] if params[:mobile]
  #   request.format = :mobile if mobile_device?
  # end
end
