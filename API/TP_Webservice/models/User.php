<?php
class User extends Model implements JsonSerializable{

	private $user_id;
	private $username;
	private $password;

	/**
	 * @return mixed
	 */
	public function getUser_id() {
		return $this->user_id;
	}

	/**
	 * @param mixed $user_id
	 */
	public function setUser_id( $user_id ) {
		$this->user_id = $user_id;
	}

	/**
	 * @return mixed
	 */
	public function getUsername() {
		return $this->username;
	}

	/**
	 * @param mixed $username
	 */
	public function setUsername( $username ) {
		$this->username = $username;
	}

	/**
	 * @return mixed
	 */
	public function getPassword() {
		return $this->password;
	}

	/**
	 * @param mixed $password
	 */
	public function setPassword( $password ) {
		$this->password = $password;
	}

	public function jsonSerialize() {
		return [
			"user_id"       =>$this->getUser_id(),
			"username"      =>$this->username,
			"password"      =>$this->password
		];
	}


}