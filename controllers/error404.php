<?php
class Error404Controller{
    private $twig;

    function __construct($twig){
        $this->twig = $twig;
    }
    function render(){
        return $this->twig->render('404.twig');
    }
} 