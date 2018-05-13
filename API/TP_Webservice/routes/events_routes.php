<?php

$controller = new EventController();

Flight::route("POST /event/", [$controller, "create"]);

Flight::route("GET /event/@id", [$controller, "getEventById"]);

Flight::route("OPTIONS /event/@id", [$controller,"preflight"]);

Flight::route("PUT /event/@id", [$controller,"update"]);

Flight::route("DELETE /event/@id", [$controller,"delete"]);

Flight::route("GET /events(/@index)", [$controller,"getAllEvents"]);

Flight::route("GET /events_user/@user_id", [$controller,"getEventsByUser"]);

Flight::route("GET /events/category(/@category)", [$controller,"getEventsByCatName"]);
