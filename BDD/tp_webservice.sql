-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Dim 13 Mai 2018 à 22:20
-- Version du serveur :  5.7.11
-- Version de PHP :  7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tp_webservice`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`cat_id`, `category`) VALUES
(1, 'Exposition'),
(2, 'Festival'),
(3, 'Sortie');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `event_title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `events`
--

INSERT INTO `events` (`event_id`, `event_title`, `description`, `address`, `date`, `category`) VALUES
(54, 'Titre Sortie', 'Description sortie', 'Adresse expo', '2018-05-14 21:30:00', 'Sortie'),
(55, 'Titre Expo', 'Description expo', 'Adresse expo', '2018-05-08 18:30:00', 'Exposition'),
(57, 'Titre festival', 'Description expo', 'Adresse festival', '2018-05-14 21:30:00', 'Festival'),
(59, 'Titre Expo', 'Description expo', 'Adresse expo', '2018-05-14 21:30:00', 'Exposition'),
(64, 'Titre updated', 'Description updated', 'Adresse expo', '2018-05-14 21:30:00', 'Festival'),
(73, 'Expo2', 'Expo2', 'perpignan', '2018-03-31 10:00:00', 'Exposition'),
(74, 'new expo', 'new expo', 'perpignan', '2018-05-18 06:00:00', 'Exposition'),
(75, 'new sortie', 'new desc', 'canet', '2018-04-29 14:00:00', 'Sortie'),
(76, 'sdqv', 'qsdvqdv', 'qdvqdv', '2018-03-01 00:59:00', 'Festival'),
(77, 'eeeeea', 'zeqfzeqf', 'zEFZEF', '2018-03-08 23:00:00', 'Exposition');

-- --------------------------------------------------------

--
-- Structure de la table `link_user_events`
--

CREATE TABLE `link_user_events` (
  `link_user_id` int(11) NOT NULL,
  `link_event_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `link_user_events`
--

INSERT INTO `link_user_events` (`link_user_id`, `link_event_id`) VALUES
(1, 59),
(1, 64),
(1, 77),
(2, 59),
(2, 73),
(2, 75),
(3, 54),
(3, 64),
(3, 73);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`) VALUES
(1, 'david', 'davidpass'),
(2, 'toto', 'totopass'),
(3, 'titi', 'titipass');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Index pour la table `link_user_events`
--
ALTER TABLE `link_user_events`
  ADD PRIMARY KEY (`link_user_id`,`link_event_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
