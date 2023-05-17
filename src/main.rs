use actix_web::{get, App, HttpServer, Responder};

#[get("/hello")]
async fn hello_world() -> impl Responder {
    format!("Hello World!!!")
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello_world)
    })
    .bind("127.0.0.1:4000")?
    .run()
    .await
}
