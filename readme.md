#pushStateAccordion#

This is my **first** GitHub-Repo ever.
I thought it would be nice to share and maybe someone got some improvements on it, which are highly appreciated, cause I'm not the jQuery/JS pro. :-)

It's licensed under [GNU/GPL](http://www.gnu.org/licenses/gpl-3.0)

#####So in short#####
This script will search for a elements with attribute `data-tools="accordion"` on it.
The href is defined as a get parameter and is reflected in the element by data-accordion which will be opened on click.

######Example######
	<a href="./?accordion1" data-tools="accordion">Open accordion 1</a>
	<div data-accordion="accordion1" class="hide">This is the first accordion</div>

	<a href="./?accordion2" data-tools="accordion">Open accordion 2</a>
	<div data-accordion="accordion2" style="display:none;">This is the second accordion</div>

So when clicking on for example "Open accordion 1" the script will prevent the default behaviour,
search for and element with the same value (after the ?) in `data-accordion` attribute and open it.
A click on an opened accordion will close it as a click on another accordion will close the previous, too.
That means only one pane can be open at the same time.
As you can see you need to hide the panes either with a class or inline CSS.
You can of course have one pane opened by default, just don't hide it ;-)

#####The URL magic#####
While clicking on the trigger pushState will change the URL acordingly, so one could bookmark a specific pane.

#####additional closing trigger#####
In addition to the normal closing of a pane by clicking again the opening trigger you can have another element
to close the pane. This one doesn't need to be a link (a) element. You only have to add the `"data-accordion-close"` attribute to it.
Like so

######Example######
	<span data-accordion-close>Close pane</span>

#####Deep-Linking and no-js fallback#####
For me the most important part was the fallback, so that people without js enabled could use it too.
For this to work you need to have some kind of server side language like PHP to check for get parameters in the url.
When you only have one accordion you can use something like this

    $showForm = (isset($input->get->new)) ? '' : ' hide';
So instead of adding the class hide manually I place the variable $showForm (e.g. `class="<?php echo $showform; ?>"`).
And when a deeplink come the variable will be empty so the pane will be open

For multiple panes I'm doing it like so

	// define all pane elements
	$showHideArray = array("accordion1", "accordion2", "accordion3");
	// iterate all panes from the array and set the hide class as needed
	foreach($showHideArray as $showHide) $$showHide = (isset($input->get->$showHide)) ? '' : ' hide';
Notice the double $ for showHide. Like this I'll get unique variables each time e.g. $accordion1, $accordion2 and so on.
So in the case of multiple panes I replace the hide class with the corresponding pane name like $accordion1

######Example######
	<a href="./?accordion1" data-tools="accordion">Open accordion 1</a>
	<div data-accordion="accordion1" class="<?php echo $accordion1; ?>">This is the first accordion</div>

	<a href="./?accordion2" data-tools="accordion">Open accordion 2</a>
	<div data-accordion="accordion2" class="<?php echo $accordion2; ?>">This is the second accordion</div>

	<a href="./?accordion3" data-tools="accordion">Open accordion 3</a>
	<div data-accordion="accordion3" class="<?php echo $accordion3; ?>">This is the third accordion</div>

**Note** that I'm using [Processwire](http://processwire.com) that's where the $input->get.. comes from. $_GET would work just fine too.
