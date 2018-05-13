<?php
class LinkRepository extends Repository {

	private const LINKS_BY_PAGE = 10;

	function createLink(Link $link ) {
		$sql = "INSERT INTO link_user_events
				SET link_user_id 	=:user_id,
					link_event_id   =:event_id";

		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute( [
			"user_id" => $link->getLink_user_id(),
			"event_id" => $link->getLink_event_id()
		] );

		return (bool) $link;
	}

	function getAllLinks() {

		$sql       = "SELECT * FROM link_user_events";
		$statement = $this->pdo->prepare( $sql );
		$result    = $statement->execute();

		$links = [];

		if ( $result ) {
			$datas = $statement->fetchAll();
			foreach ( $datas as $data) {
				$links[] = new Link( $data );
			}
		}

		return $links;
	}

	function deleteLink($user_id, $event_id){
		$sql = "DELETE FROM link_user_events WHERE link_user_id=:user_id AND link_event_id=:event_id";
		$statement = $this->pdo->prepare($sql);
		$result = $statement->execute([
			"user_id"   =>$user_id,
			"event_id"  =>$event_id
		]);

		return (bool) $result && $statement->rowCount();
	}

    function getLinksByUser($user_id, $index=0) {

        $sql       = "SELECT * FROM link_user_events WHERE link_user_id=:user_id";
        $statement = $this->pdo->prepare( $sql );
        $statement->bindValue(":index", $index * self::LINKS_BY_PAGE, PDO::PARAM_INT);
        $statement->bindValue(":offset", self::LINKS_BY_PAGE, PDO::PARAM_INT);
        $result    = $statement->execute([

            "user_id" => $user_id
        ]);

        $links = [];

        if ( $result ) {
            $datas = $statement->fetchAll();
            foreach ( $datas as $data) {
                $links[] = new Link( $data );
            }
        }

        return $links;
    }
}