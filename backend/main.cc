#include <drogon/drogon.h>

int main() {
    //Set HTTP listener address and port
    drogon::app().addListener("0.0.0.0", 5555);
    
    drogon::app().registerHandler(
        "/api/hello",
        [](const drogon::HttpRequestPtr&,
        std::function<void(const drogon::HttpResponsePtr&)>&& callback) {
            Json::Value json;
            json["message"] = "Olá do C++!";

            auto response = drogon::HttpResponse::newHttpJsonResponse(json);

            callback(response);
        },

        {drogon::Get}
    );

    drogon::app().registerPostHandlingAdvice(
        [](const drogon::HttpRequestPtr&,
            const drogon::HttpResponsePtr& response) {
            response->addHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:5173"
            );

            response->addHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE, OPTIONS"
            );

            response->addHeader(
                "Access-Control-Allow-Headers",
                "Content-Type, Authorization"
            );
        }
    );

    drogon::app().run();

    return 0;
}
