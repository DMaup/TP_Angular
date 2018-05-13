<?php
class UserRepository extends Repository {

	//private const USERS_BY_PAGE = 10;


	function createUser( User $user ) {
		$sql = "INSERT INTO users
				SET username 	=:username,
					password	=:password";

		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute( [
			"username" => $user->getUsername(),
			"password" => $user->getPassword()
		] );

		$user_id = 0;

		if ( $result ) {
			$user_id = $this->pdo->lastInsertId();
			$user->set_id( $user_id );
		}

		return (bool) $user_id;
	}

	function getUserById( $id ) {
		$sql       = "SELECT * FROM users WHERE user_id=:id";
		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute( [
			"id" => $id
		] );

		$user = null;

		if ( $statement->rowCount() ) {
			$data = $statement->fetch();
			$user = new User( $data );
		}

		return $user;
	}

	function getUserByUsername( $username, $password ) {
		$sql       = "SELECT * FROM users WHERE username=:username AND password=:password";
		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute( [
			"username" => $username,
			"password" => $password
		] );

		$users = [];

		if ( $result ) {
			$datas = $statement->fetchAll();

			foreach ( $datas as $data) {
				$users[] = new User( $data );
			}
		}

		return $users;
	}

	function getAllUsers() {

		$sql       = "SELECT * FROM users";
		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute();

		$users = [];

		if ( $result ) {
			$datas = $statement->fetchAll();
			foreach ( $datas as $data) {
				$users[] = new User( $data );
			}
		}

		return $users;
	}

	function getIdByUsername( $username ) {
		$sql       = "SELECT users.user_id FROM users WHERE username=:username";
		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute( [
			"username" => $username
		] );

		$user = null;

		if ( $statement->rowCount() ) {
			$data = $statement->fetch();
			$user = new User( $data );

		}

		return $user;
	}
}