get '/' do
  # Look in app/views/index.erb
  erb :index
 end 

post '/' do
  username = params[:username]
  redirect "/#{username}"
end

get '/:username' do
  @user = params[:username]
  @repo_name = params[:repo_input]
  @repos = Github.repos.list user: @user
 
  # @contributors = Github.repos.contributors @user, "JavaScript-Racer-2"
  # @repos.each do |r|
    # p r.collaborators
  # end
  erb :results
end
