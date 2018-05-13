<?php
use RepositoryManager as RM;

class UserController {

	function preflight(){
		$this->response(["success"=>true]);
	}

	function response($status){
		//header("Access-Control-Allow-Origin: http://localhost:3000");
		header("Access-Control-Allow-Origin: http://localhost:4200");
		header("Access-Control-Allow-Headers: Content-type");
		header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
		header("Content-type: application/json");


		echo json_encode($status);
	}

	function getUserById($id) {
		$userRepository = RM::getInstance()->getUserRepository();
		$user           = $userRepository->getUserById( $id );

		$success = false;

		if ( $user ) {
			$success = true;
		}

		$status = [
			"success" => $success,
			"user"   => $user
		];

		$this->response($status);
	}

	function getUserByUsername($username, $password) {
		if($username && $password) {
			$userRepository = RM::getInstance()->getUserRepository();
			$user           = $userRepository->getUserByUsername( $username, $password );

			$success = false;

			if ( $user ) {
				$success = true;
			}

			$status = [
				"success" => $success,
				"user"    => $user
			];

			$this->response( $status );
		}
		else return;
	}

	function getAllUsers() {

		$userRepository = RM::getInstance()->getUserRepository();
		$users          = $userRepository->getAllUsers();

		$success = false;

		if ( $users ) {
			$success = true;
		}

		$status = [
			"success" => $success,
			"users"    => $users
		];

		$this->response($status);
	}

	function getIdByUsername($username) {
		$userRepository = RM::getInstance()->getUserRepository();
		$user           = $userRepository->getIdByUsername( $username );

		$success = false;

		if ( $user ) {
			$success = true;
		}


		$status = [
			"success" => $success,

		];

		$this->response($status);
	}
}