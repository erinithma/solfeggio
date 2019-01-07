<?php

/* layout.twig */
class __TwigTemplate_7dda73421652628c487e8b500c3a9dd9a98b39360330344a959fa65f3eb5eabe extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"ru\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
    <title>Solfeggion</title>
    <link rel=\"stylesheet\" href=\"/assets/css/style.css\">
</head>
<body>
    <div class=\"container explode\">
        <div class=\"nav-bar\">
            <a href=\"\" class=\"row align-center menu\">
                <img src=\"/assets/img/menu.svg\" width=\"36\" height=\"36\">                
            </a> 

            <ul class=\"menu-links\" data-show=\"hide\">
                <li><a href=\"\"><img src=\"/assets/img/play.svg\" alt=\"\" width=\"16\" height=\"16\"> Игра</a></li>
                <li><a href=\"\"><img src=\"/assets/img/mindur.svg\" alt=\"\" width=\"16\" height=\"16\"> Мажор / минор</a></li>
                <li><a href=\"\"><img src=\"/assets/img/note.svg\" alt=\"\" width=\"16\" height=\"16\"> Ноты</a></li>
                <li><a href=\"\"><img src=\"/assets/img/interval.svg\" alt=\"\" width=\"16\" height=\"16\"> Интервалы</a></li>
                <li><a href=\"\"><img src=\"/assets/img/dictant.svg\" alt=\"\" width=\"16\" height=\"16\"> Диктант</a></li>
            </ul>

            <a href=\"\" class=\"row align-center\">
                <img class=\"logo\" src=\"/assets/img/logo.svg\" width=\"36\" height=\"36\"> 
                <span class=\"title\">Solfeggion</span>
            </a>

            <div class=\"nav-bar__menu\"> 
                <a href=\"\">Игра</a>
                <a href=\"\">Мажор / минор</a>
                <a href=\"\">Ноты</a>
                <a href=\"\">Интервалы</a>
                <a href=\"\">Диктант</a>
            </div> 
        </div>

        <div class=\"main\">            
            ";
        // line 40
        $this->displayBlock('content', $context, $blocks);
        // line 42
        echo "        </div>        
    </div>
    
    <div class=\"footer column implode\">
        <div class=\"container align-center row wrap\">
            <b>Solfeggion</b> <span class=\"left-offset\">По вопросам работы сайта:&nbsp;<a href=\"mailto:solfeggion@gmail.com\">solfeggion@gmail.com</span></a>
        </div>    
    </div>

    <script
        src=\"https://code.jquery.com/jquery-3.3.1.min.js\"
        integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"
        crossorigin=\"anonymous\">
    </script>

    <script>
        \$(\"body\").on(\"click\", \".menu\", function(e){
            e.preventDefault();
            e.stopPropagation();

            if(\$(\".menu-links\").attr(\"data-show\") === \"show\")
                \$(\".menu-links\").attr(\"data-show\", \"hide\");
            else
                \$(\".menu-links\").attr(\"data-show\", \"show\");
        });

        \$(\"body\").on(\"click\", function(e){
            if(!e.target.closest(\".menu-links\") && !e.target.closest(\".menu\")){
                if(\$(\".menu-links\").attr(\"data-show\") === \"show\")
                    e.preventDefault();
                \$(\".menu-links\").attr(\"data-show\", \"hide\");
            }
        });
    </script>
</body>
</html>";
    }

    // line 40
    public function block_content($context, array $blocks = array())
    {
        echo "            
            ";
    }

    public function getTemplateName()
    {
        return "layout.twig";
    }

    public function getDebugInfo()
    {
        return array (  102 => 40,  63 => 42,  61 => 40,  20 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html lang="ru">*/
/* <head>*/
/*     <meta charset="UTF-8">*/
/*     <meta name="viewport" content="width=device-width, initial-scale=1.0">*/
/*     <meta http-equiv="X-UA-Compatible" content="ie=edge">*/
/*     <title>Solfeggion</title>*/
/*     <link rel="stylesheet" href="/assets/css/style.css">*/
/* </head>*/
/* <body>*/
/*     <div class="container explode">*/
/*         <div class="nav-bar">*/
/*             <a href="" class="row align-center menu">*/
/*                 <img src="/assets/img/menu.svg" width="36" height="36">                */
/*             </a> */
/* */
/*             <ul class="menu-links" data-show="hide">*/
/*                 <li><a href=""><img src="/assets/img/play.svg" alt="" width="16" height="16"> Игра</a></li>*/
/*                 <li><a href=""><img src="/assets/img/mindur.svg" alt="" width="16" height="16"> Мажор / минор</a></li>*/
/*                 <li><a href=""><img src="/assets/img/note.svg" alt="" width="16" height="16"> Ноты</a></li>*/
/*                 <li><a href=""><img src="/assets/img/interval.svg" alt="" width="16" height="16"> Интервалы</a></li>*/
/*                 <li><a href=""><img src="/assets/img/dictant.svg" alt="" width="16" height="16"> Диктант</a></li>*/
/*             </ul>*/
/* */
/*             <a href="" class="row align-center">*/
/*                 <img class="logo" src="/assets/img/logo.svg" width="36" height="36"> */
/*                 <span class="title">Solfeggion</span>*/
/*             </a>*/
/* */
/*             <div class="nav-bar__menu"> */
/*                 <a href="">Игра</a>*/
/*                 <a href="">Мажор / минор</a>*/
/*                 <a href="">Ноты</a>*/
/*                 <a href="">Интервалы</a>*/
/*                 <a href="">Диктант</a>*/
/*             </div> */
/*         </div>*/
/* */
/*         <div class="main">            */
/*             {% block content %}            */
/*             {% endblock %}*/
/*         </div>        */
/*     </div>*/
/*     */
/*     <div class="footer column implode">*/
/*         <div class="container align-center row wrap">*/
/*             <b>Solfeggion</b> <span class="left-offset">По вопросам работы сайта:&nbsp;<a href="mailto:solfeggion@gmail.com">solfeggion@gmail.com</span></a>*/
/*         </div>    */
/*     </div>*/
/* */
/*     <script*/
/*         src="https://code.jquery.com/jquery-3.3.1.min.js"*/
/*         integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="*/
/*         crossorigin="anonymous">*/
/*     </script>*/
/* */
/*     <script>*/
/*         $("body").on("click", ".menu", function(e){*/
/*             e.preventDefault();*/
/*             e.stopPropagation();*/
/* */
/*             if($(".menu-links").attr("data-show") === "show")*/
/*                 $(".menu-links").attr("data-show", "hide");*/
/*             else*/
/*                 $(".menu-links").attr("data-show", "show");*/
/*         });*/
/* */
/*         $("body").on("click", function(e){*/
/*             if(!e.target.closest(".menu-links") && !e.target.closest(".menu")){*/
/*                 if($(".menu-links").attr("data-show") === "show")*/
/*                     e.preventDefault();*/
/*                 $(".menu-links").attr("data-show", "hide");*/
/*             }*/
/*         });*/
/*     </script>*/
/* </body>*/
/* </html>*/
