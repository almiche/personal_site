require './index'
require 'rack'
# require 'quotifier'

# use Quotifier

configure :development do
    use Rack::Reloader
  end

run Sinatra::Application