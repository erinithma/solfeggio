<?php

define ("ROOT", __DIR__);
define ("IN_SITE", TRUE);

include ROOT . "/controllers/autoload.php";

$routes = include_once ROOT . "/data/routes.php"; 

require_once ROOT . '/engine/Twig/Autoloader.php';
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem(ROOT . "/tpl");
$twig = new Twig_Environment($loader, array(
    'cache' => false//ROOT . '/cache',
));

$c = new Error404Controller($twig);
echo $c->render();

