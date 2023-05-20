use actix_web::{get, web, HttpResponse, Responder};

use super::model::Todo;

#[get("/todos")]
async fn find_all() -> impl Responder {
    HttpResponse::Ok().json(vec![
        Todo {
            id: 1,
            title: String::from("Title 1"),
            description: String::from("Description 1"),
            done: false
        },
        Todo {
            id: 2,
            title: String::from("Title 2"),
            description: String::from("Description 2"),
            done: true
        }
    ])
}

#[get("/todos/{id}")]
async fn find() -> impl Responder {
    HttpResponse::Ok().json(Todo {
		id: 2,
		title: String::from("Title 2"),
		description: String::from("Description 2"),
		done: true
    })
}

pub fn init_routes(config: &mut web::ServiceConfig) {
	config.service(find_all);
	config.service(find);
}
