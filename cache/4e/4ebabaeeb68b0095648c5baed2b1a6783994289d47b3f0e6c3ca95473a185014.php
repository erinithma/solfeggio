<?php

/* index.twig */
class __TwigTemplate_f1145f7da419e27b19e2891e57f1a18ba8f1f3d5465adfe19ee80099a8f46b98 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("layout.twig", "index.twig", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        echo "      
<div class=\"grid\">
    <div class=\"item\">
        <a class=\"item__content\">
            <img src=\"/assets/img/play.svg\" alt=\"\" width=\"128\" height=\"128\">
            Игра
        </a>
    </div>
    <div class=\"item\">
        <a class=\"item__content\">
            <img src=\"/assets/img/mindur.svg\" alt=\"\" width=\"128\" height=\"128\">
            Мажор / минор
        </a>
    </div>
    <div class=\"item\">
        <a class=\"item__content\">
            <img src=\"/assets/img/note.svg\" alt=\"\" width=\"128\" height=\"128\">
            Ноты
        </a>
    </div>      
    <div class=\"item\">
        <a class=\"item__content\">
            <img src=\"/assets/img/interval.svg\" alt=\"\" width=\"128\" height=\"128\">
            Интервалы
        </a>
    </div>    
    <div class=\"item\">
        <a class=\"item__content\">
            <img src=\"/assets/img/dictant.svg\" alt=\"\" width=\"128\" height=\"128\">
            Диктант
        </a>
    </div>  
</div>      
";
    }

    public function getTemplateName()
    {
        return "index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  28 => 3,  11 => 1,);
    }
}
/* {% extends "layout.twig" %}*/
/* */
/* {% block content %}      */
/* <div class="grid">*/
/*     <div class="item">*/
/*         <a class="item__content">*/
/*             <img src="/assets/img/play.svg" alt="" width="128" height="128">*/
/*             Игра*/
/*         </a>*/
/*     </div>*/
/*     <div class="item">*/
/*         <a class="item__content">*/
/*             <img src="/assets/img/mindur.svg" alt="" width="128" height="128">*/
/*             Мажор / минор*/
/*         </a>*/
/*     </div>*/
/*     <div class="item">*/
/*         <a class="item__content">*/
/*             <img src="/assets/img/note.svg" alt="" width="128" height="128">*/
/*             Ноты*/
/*         </a>*/
/*     </div>      */
/*     <div class="item">*/
/*         <a class="item__content">*/
/*             <img src="/assets/img/interval.svg" alt="" width="128" height="128">*/
/*             Интервалы*/
/*         </a>*/
/*     </div>    */
/*     <div class="item">*/
/*         <a class="item__content">*/
/*             <img src="/assets/img/dictant.svg" alt="" width="128" height="128">*/
/*             Диктант*/
/*         </a>*/
/*     </div>  */
/* </div>      */
/* {% endblock %}*/
