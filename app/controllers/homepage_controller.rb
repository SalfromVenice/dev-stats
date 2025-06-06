class HomepageController < ApplicationController
    def index
    end

    def get_stats
      username = params[:username]
      base_url = ENV["BASE_URL"]
      uri = URI("#{base_url}/graphql")
      query = <<~GRAPHQL
        query {
          user(login: "#{username}") {
            login
            avatarUrl
            repositories(first: 100, ownerAffiliations: OWNER) {
              totalCount
              nodes {
                name
                languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                  edges {
                    size
                    node {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      GRAPHQL

      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = (uri.scheme == "https")

      request = Net::HTTP::Post.new(uri.path, {
        "Content-Type" => "application/json",
        "Authorization" => "Bearer #{ENV['TOKEN']}"
      })
      request.body = { query: query }.to_json

      response = http.request(request)

      begin
          data = JSON.parse(response.body)
      rescue JSON::ParserError => e
          Rails.logger.error("Errore di parsing JSON: #{e.message}")
          return render json: { error: "Risposta non valida dalla GraphQL API" }, status: :unprocessable_entity
      end

      normalized_data = normalize_data(data)

      render json: normalized_data
    end

    private
    # TODO: formattare bene il json, in modo da renderlo fruibile nel frontend
    def normalize_data(data)
      if data["errors"]
          return data
      end

      repositories = data["data"]["user"]["repositories"]["nodes"]
      aggregated = {}

      repositories.each do |repo|
        repo["languages"]["edges"].each do |lang|
          name = lang["node"]["name"]
          color = lang["node"]["color"]
          size = (lang["size"] / 1024).round(2)

          if aggregated.key?(name)
            aggregated[name][:size] += size
          else
            aggregated[name] = { name: name, color: color, size: size }
          end
        end
      end

      {
          username: data["data"]["user"]["login"],
          repos: data["data"]["user"]["repositories"]["totalCount"],
          avatar: data["data"]["user"]["avatarUrl"],
          stats: aggregated.values
      }
    end
end
