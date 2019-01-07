<?php
class TrainingInsideController{
    private $twig;

    function __construct($twig){
        $this->twig = $twig;
    }
    function render(){
        return $this->twig->render('training_inside.twig');
    }
} 