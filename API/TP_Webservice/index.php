<?php
header('Access-Control-Allow-Origin: *');
require "flight/Flight.php";
require "autoload.php";
require "routes/events_routes.php";
require "routes/users_routes.php";
require "routes/links_routes.php";

Flight::start();

