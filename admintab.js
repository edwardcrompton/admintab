//Thanks to Dave McDermid on whose code this is based.
//http://scrunchup.com/article/the-evolution-of-a-jquery-plugin/

$(function() {
	makeOurSlideyMenu('.admintab-tab','.container', 300);
	
	//change the colours on our slidy menu
	makeColourAdjustments();
});

function makeOurSlideyMenu (trigger, menu, speed) {
	//Remember the normal width for our menu
	$(menu).data('oldwidth', $(menu).css('width'));
	$(menu).css({ width: '0px', overflow: 'hidden' });
			
	$(trigger).click(function() {
		//Get the width the menu is right now.
		currentWidth = $(menu).width();
		
		//Slide either in or out depending on current width
		if (currentWidth == 0) {	//Sliding out
			$(menu).animate({ width: $(menu).data('oldwidth') }, speed);
		}
		else {	//Sliding in
			$(menu).animate({ width: '0px' }, speed);
		}
	});
}

function makeColourAdjustments () {
	background = '.container';
	tab = '.admintab-tab';
	title = '#admintab .tabtitle';
	link = '#admintab .links li a';
	hr = '#admintab hr';
	
	backgroundColour = Drupal.settings.admintab.backgroundColour;
	linkColour = Drupal.settings.admintab.linkColour;
	titleColour = Drupal.settings.admintab.titleColour;
	borderColour = Drupal.settings.admintab.borderColour;
	darkBorderColour = Drupal.settings.admintab.darkBorderColour;
	
	//Setting up basic colours
	$(background).css('background-color',backgroundColour);
	//$(tab).css('background-color',borderColour);
	$(title).css('color',titleColour);
	$(link).css('color',linkColour);
	
	//Setting up borders
	$(background).css('border-right','2px solid ' + borderColour);
	$(background).css('border-bottom','2px solid ' + borderColour);
	//$(tab).css('border-right', '2px solid '+ darkBorderColour);
	//$(tab).css('border-top', '2px solid '+ darkBorderColour);
	$(hr).css('background-color', borderColour);
	$(hr).css('color', borderColour);
}


