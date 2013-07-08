get '/' do
  # Look in app/views/index.erb
  erb :index


post '/results' do
username = params[:user]
@user = Octokit::Client.new(:login => username)
  @followers = @user.followers(user_name)
  @gists = @user.gists(user_name)
  @repos = @user.repositories(user_name)
	erb :results
end
