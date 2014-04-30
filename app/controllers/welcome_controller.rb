class WelcomeController < ApplicationController
  def index
    @contact = Contact.new
  end

  def mobile
    @contact = Contact.new
  end

  def issues
  end

  def contact_us
  end
end
