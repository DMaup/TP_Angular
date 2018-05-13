<?php
use RepositoryManager as RM;

class LinkController {

	function preflight() {
		$this->response( [ "success" => true ] );
	}

	function response( $status ) {
		//header("Access-Control-Allow-Origin: http://localhost:3000");
		header( "Access-Control-Allow-Origin: http://localhost:4200" );
		header( "Access-Control-Allow-Headers: Content-type" );
		header( "Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS" );
		header( "Content-type: application/json" );


		echo json_encode( $status );
	}

	function createLink() {
		$linkRepository = RM::getInstance()->getLinkRepository();
		$link           = new Link( Flight::request()->data->getData() );


		$success = $linkRepository->createLink( $link );

		$status = [
			"success" => $success,
			"message" => "L'inscription à l'évènement a bien été enregistrée!"
		];

		$this->response( $status );

	}

	function getAllLinks($index) {
		if(!$index) $index = 0;
		$linkRepository = RM::getInstance()->getLinkRepository();
		$links          = $linkRepository->getAllLinks();

		$success = false;

		if ( $links ) {
			$success = true;
		}

		$status = [
			"success" => $success,
			"links"    => $links
		];

		$this->response($status);
	}

    function getLinksByUSer($link_user_id) {
        $linkRepository = RM::getInstance()->getLinkRepository();
        $links          = $linkRepository->getLinksByUSer($link_user_id);

        $success = false;

        if ( $links ) {
            $success = true;
        }

        $status = [
            "success" => $success,
            "links"    => $links
        ];

        $this->response($status);
    }

	function deleteLink($link_user_id, $link_event_id) {
		$linkRepository = RM::getInstance()->getLinkRepository();
		$success = $linkRepository->deleteLink( $link_user_id, $link_event_id );

		$status = [
			"success" => $success,
			"message" => "L'inscription à l'évènement a bien été supprimée!"
		];

		$this->response( $status );

	}
}