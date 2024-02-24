var $menu = $('#menu'),
	$menu_openers = $menu.children('ul').find('.opener');

// Otevírače
$menu_openers.each(function() {
    var $this = $(this);
    $this.on('click', function(event) {
        event.preventDefault(); // Zabránit výchozímu chování

    // Přepnout
        $menu_openers.not($this).removeClass('active');
        $this.toggleClass('active');
        $('.opener').triggerHandler('resize.sidebar-lock'); // Spustit resize (uzamčení postranního panelu)
    });
});