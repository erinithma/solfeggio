<?php
namespace Template;
final class Twig {
	private $twig;
	private $data = array();
	
	public function __construct() {
		// include and register Twig auto-loader
		include_once(__DIR__. '/Twig/Autoloader.php');
		
		\Twig_Autoloader::register();
	}
	
	public function set($key, $value) {
		$this->data[$key] = $value;
	}
	
	public function render($template) {
		// specify where to look for templates
		$loader = new \Twig_Loader_Filesystem($_SERVER['DOCUMENT_ROOT'] . '/tpl');

		// initialize Twig environment
		$config = array('autoescape' => false);

		$this->twig = new \Twig_Environment($loader, $config);
		
		try {
			// load template
			$template = $this->twig->loadTemplate($template . '.twig');
			
			return $template->render($this->data);
		} catch (Exception $e) {
			trigger_error('Error: Could not load template ' . $template . '!');
			exit();	
		}	
	}	
}
