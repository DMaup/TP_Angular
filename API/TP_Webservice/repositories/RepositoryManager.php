<?php
class RepositoryManager{

	private static $instance = null;
	static function getInstance(){

		if(!self::$instance){
			self::$instance = new RepositoryManager();
		}

		return self::$instance;
	}

	private $eventRepository;

	public function getEventRepository() {
		return $this->eventRepository;
	}

	private $userRepository;

	public function getUserRepository() {
		return $this->userRepository;
	}

	private $linkRepository;

	public function getLinkRepository() {
		return $this->linkRepository;
	}

	private function __construct() {

		$pdo = (new Bdd()) -> getPdo();
		$this->eventRepository  = new EventRepository($pdo);
		$this->userRepository   = new UserRepository($pdo);
		$this->linkRepository   = new LinkRepository($pdo);
	}
}