<?php
spl_autoload_register(function ($class) {
    $m = [];
    if(preg_match("#^(\w+)Controller$#i", $class, $m))
        include __DIR__ . "/" . ucfirst($m[1]) . '.php';
});