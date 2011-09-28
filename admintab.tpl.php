<?php
// $Id
/*The container div should always have an id of admintab. Otherwise the javascript will not work.*/
/*admintab-tab needs to be present too*/
?>

<div id="admintab">
  <div class="container">
    <?php if($menu_links['content']['links']): ?>
      <p class="first">
        <span class="tabtitle"><?php echo $menu_links['content']['title'] ?></span>
      </p>
      <div class="first"><?php echo $menu_links['content']['links'] ?></div>
      
      <hr />
    <?php endif;?>
    
    <?php if($menu_links['misc']['links']): ?>
      <p>
        <span class="tabtitle"><?php echo $menu_links['misc']['title'] ?></span>
      </p>
      <div><?php echo $menu_links['misc']['links'] ?></div>
      
      <hr />
    <?php endif;?>
    
    <?php if($menu_links['custom']['links']): ?>
      <p class="last">
        <span class="tabtitle"><?php echo $menu_links['custom']['title'] ?></span>
      </p>
      <div class="last"><?php echo $menu_links['custom']['links'] ?></div>  
    <?php endif;?>
    
    <?php if($no_links): ?>
      <div class="filler">There are no available menu items. Please add some using the
      <?php echo l('menus administration','admin/build/menu-customize/admintab',array('title' => 'administer admin tabs menu')); ?>
      page
      </div>  
    <?php endif;?>
  </div>
  <img class="admintab-tab" src="<?php echo base_path().drupal_get_path('module', 'admintab'); ?>/images/tab.png" alt="admin tools icon" />
</div>
