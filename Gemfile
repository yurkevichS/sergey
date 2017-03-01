source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end



gem 'rails', '~> 5.0.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'jbuilder'
gem 'thor', '0.19.1'
gem 'rack-cors', :require => 'rack/cors'

gem 'mongoid'


group :development, :test do
  gem 'listen', '~> 3.0.5'
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'httparty'

end

group :development do

  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end


gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :production do
	gem 'rails_12factor'
end






  

