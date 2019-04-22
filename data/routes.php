<?php 
    return [
        [
            "path" => "/",
            "controller" => "IndexController"
        ],
        [
            "path" => "/тренажер/",
            "controller" => "TrainingController"
        ],
        [
            "path" => "/тренажер/игра",
            "controller" => "TrainingInsideController"
        ],
        [
            "path" => "/тренажер/мажор-минор",
            "controller" => "TrainingInsideController"
        ],
        [
            "path" => "/обучение/",
            "controller" => "EducationController"
        ],
        [
            "path" => "/тренажер/настройки",
            "controller" => "CommonSettingsController"
        ]
    ];