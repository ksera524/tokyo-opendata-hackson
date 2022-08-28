use actix_web::{get,HttpResponse, HttpServer,App};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::{fs::File, io::BufReader};
use std::process::{Command};

const SERVER:&str = "0.0.0.0:8080";
const JSON_NAME:&str = "output.json";
const PYTHON_PATH:&str = "batch/qcsv2json.py";

#[derive(Serialize, Deserialize)]
struct ReturnJson{
    q5:HashMap<String,f32>,
    q7:HashMap<String,f32>,
    q14:HashMap<String,f32>,
}

#[get("/getJson")]
async fn get_json() -> Result<HttpResponse,actix_web::Error>{
    let json = File::open(JSON_NAME).unwrap();
    let json = BufReader::new(json);

    let res:ReturnJson = serde_json::from_reader(json).unwrap();
    

    Ok(HttpResponse::Ok()
        .content_type("application/json")
        .json(res))
}

#[get("/python")]
async fn execute_python()-> Result<HttpResponse,actix_web::Error> {
    let path = PYTHON_PATH;
    Command::new("python").args(&["-u".to_string(), path.to_string()]).spawn().unwrap();
    

    Ok(HttpResponse::Ok().body("ok"))
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .service(get_json)
            .service(execute_python)
    })
    .bind(SERVER)?
    .run()
    .await
}
