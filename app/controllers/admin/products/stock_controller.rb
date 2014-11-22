class Admin::Products::StockController < ApplicationController
    before_action :authenticate_user!
    layout 'admin'

    def index
        @skus = Sku.includes(:product).active.all
    end

    def show
        @sku = Sku.includes(:product).active.find(params[:id])
        @stock_adjustments = @sku.stock_adjustments.where('description IS NOT NULL')
        @stock_adjustment = @sku.stock_adjustments.build
    end
end