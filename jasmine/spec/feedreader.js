
// console.log("sourced feedreader.js properly")
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		it('has a URL defined and that the URL is not empty', function() {
			allFeeds.forEach(function(entry){
				//console.log(entry);
				expect(entry.url).toBeTruthy();
			});
		});

		it('has a name defined and that the name is not empty', function() {
			allFeeds.forEach(function(entry){
				expect(entry.name).toBeTruthy();
			});
		});
    });




describe('The menu', function() {
	var spyEvent;

	it('has the menu element is hidden by default', function() {
		expect('body').toHaveAttr('class', 'menu-hidden');
	});

	it('a test that ensures the menu changes visibility when the menu icon is clicked', function() {
		$('.menu-icon-link').trigger("click");
		expect('body').not.toHaveAttr('class', 'menu-hidden');

		$('.menu-icon-link').trigger("click");
		expect('body').toHaveAttr('class', 'menu-hidden');
	});
});
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

describe('Initial Entries', function() {
	beforeEach(function(done) {
		loadFeed(0, function () {
			done();
		});
	});
	 it('has at least a single .entry element within the .feed container', function(done) {
            // expect($('.entry')[0]).toBeInDOM()
            expect($('.feed .entry')).toBeInDOM()
		  done();
	 });
});
    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

}());
