<?php
class Link extends Model implements JsonSerializable {

	private $link_user_id;
	private $link_event_id;

	/**
	 * @return mixed
	 */
	public function getLink_user_id() {
		return $this->link_user_id;
	}

	/**
	 * @param mixed $link_user_id
	 */
	public function setLink_user_id( $link_user_id ) {
		$this->link_user_id = $link_user_id;
	}

	/**
	 * @return mixed
	 */
	public function getLink_event_id() {
		return $this->link_event_id;
	}

	/**
	 * @param mixed $link_event_id
	 */
	public function setLink_event_id( $link_event_id ) {
		$this->link_event_id = $link_event_id;
	}

	public function jsonSerialize() {
		return [
			"link_user_id"  => $this->link_user_id,
			"link_event_id" => $this->link_event_id
		];
	}
}
