<?php

$user_controller = new UserController();

Flight::route("GET /user/@id", [$user_controller, "getUserById"]);

Flight::route("GET /user/@username/@password", [$user_controller, "getUserByUsername"]);

Flight::route("OPTIONS /user/@id/@username", [$user_controller,"preflight"]);

Flight::route("GET /users(/@index)", [$user_controller,"getAllUsers"]);

Flight::route("GET /users/user/@username", [$user_controller, "getIdByUsername"]);
