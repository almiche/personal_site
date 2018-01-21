require 'sinatra'

class MyApp < Sinatra::Application

    def initalize(app = nil)
        super(app)
    end

    set :public_folder, 'public'

    get '/' do
        html :index
    end

    get '/projects' do 
        html :projects
    end
   
    get '/aboutme' do 
        html :about
    end
    
    get '/resume' do 
        html :resume
    end

    def html(view)
        File.read(File.join('public', "#{view.to_s}.html"))
      end




    MyApp.run!
end