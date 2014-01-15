class ProductsController < ApplicationController

  skip_before_filter :authenticate_user!
  
  # GET /products/1
  # GET /products/1.json
  def show
    @product = Product.find(params[:id])
    @cart_item = CartItem.new
    @notification = Notification.new
    @sku = Sku.find(@product.skus.sort.reverse.first.id)
    @stock = @product.skus.sort.reverse.first.stock
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @product }
    end
  end

  def update_sku
    render :partial => 'products/update_sku', :format => [:js], :locals => { :sku_id => params[:sku_id] } 
  end

end
