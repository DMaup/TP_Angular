<?php

$link_controller = new LinkController();

Flight::route("POST /link", [$link_controller, "createLink"]);

Flight::route("GET /links(/@index)", [$link_controller,"getAllLinks"]);

Flight::route("GET /links/link/@user_id", [$link_controller,"getLinksByUser"]);

Flight::route("DELETE /link/@user_id/@event_id", [$link_controller,"deleteLink"]);

Flight::route("OPTIONS /link/*", [$link_controller,"preflight"]);