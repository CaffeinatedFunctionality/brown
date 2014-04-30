class MobileController < ApplicationController
  def index
  end

  def bio
  end

  def soil_and_water
  end

  def issues
  end

  def contact
    @contact = Contact.new
  end

  def solutions
  end
end
