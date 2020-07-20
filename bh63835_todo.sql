-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Июл 20 2020 г., 21:11
-- Версия сервера: 10.1.45-MariaDB-cll-lve
-- Версия PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bh63835_todo`
--

-- --------------------------------------------------------

--
-- Структура таблицы `todo_list`
--

CREATE TABLE `todo_list` (
  `id_todo` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `label` varchar(100) NOT NULL,
  `done` tinyint(4) NOT NULL DEFAULT '0',
  `important` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `todo_list`
--

INSERT INTO `todo_list` (`id_todo`, `user_id`, `label`, `done`, `important`) VALUES
(1, 1, 'Купить сметану', 0, 0),
(2, 1, 'Купить колбасу и масло', 0, 0),
(3, 1, 'Купить молоко', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `todo_users`
--

CREATE TABLE `todo_users` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `user_password` varchar(256) NOT NULL,
  `user_email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `todo_users`
--

INSERT INTO `todo_users` (`user_id`, `user_name`, `user_password`, `user_email`) VALUES
(1, 'savfa', 'admin', 'savfa@yandex.ru'),
(2, 'garmoni', '123456', 'opasyura@gmail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `todo_list`
--
ALTER TABLE `todo_list`
  ADD PRIMARY KEY (`id_todo`);

--
-- Индексы таблицы `todo_users`
--
ALTER TABLE `todo_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `id_todo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `todo_users`
--
ALTER TABLE `todo_users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
