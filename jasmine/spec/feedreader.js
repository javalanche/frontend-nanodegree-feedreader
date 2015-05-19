
// source tests only once DOM is loaded
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		it('have a URL defined and that the URL is not empty', function() {
			allFeeds.forEach(function(entry){
                expect(entry.url.length).not.toBe(0);
                expect(entry.url).toContain("http");
			});
		});

		it('have a name defined and that the name is not empty', function() {
			allFeeds.forEach(function(entry){
                expect(entry.name.length).not.toBe(0);
                expect(entry.name).toEqual(jasmine.any(String));
			});
		});
    });



// code has class menu-hidden by default but a click event toggle this class
// we simply execute that click and check for the class presence
describe('The menu', function() {

	it('has the menu element hidden by default', function() {
		expect($('body').hasClass("menu-hidden")).toBe(true);
    });

    it('changes visibility when the menu icon is clicked', function() {
        $('.menu-icon-link').click();
        expect($('body').hasClass("menu-hidden")).toBe(false);

        $('.menu-icon-link').click();
        expect($('body').hasClass("menu-hidden")).toBe(true);
	});
});


describe('Initial Entries', function() {
	beforeEach(function(done) {
		loadFeed(0, function () {
			done();
		});
	});
	 it('will be populated on page loads, which is the very \
        first item in array containing entries', function() {
            // jQuery grabs the very first .entry class that has a parent
            // with class .feed only and ensure is in the DOM
            expect($('.feed .entry:eq(0)')).toBeInDOM();
	 });
});

describe('New Feed Selection', function() {
    var oldContent;
    
    // asynchronous function needs to done parameter and done()
    // reloads the first news feed 
    beforeAll(function(done) {
        loadFeed(0, function () {
            done();
        });
    });
	it('has a test that ensures when a news feed is loaded \
        by the loadFeed function and that the content actually \
        changes when another feed is loaded', function() {
		
        // save the entire news feed for a comparison later
        oldContent = $('.feed').html();
        expect($('.feed')).toBeInDOM();
    });
    describe('loading new feed of data to loadFeed()...', function() {
        
        // asynchronous function needs to done parameter and done()
        // reloads the second news feed
        beforeAll(function(done) {
            loadFeed(1, function () {
                done();
            });
        });
        it('the data has changed', function() {

            //grabs the entire second news feed for comparison
			var newContent = $('.feed').html();
			// console.log(oldContent);
			// console.log(newContent);
			expect(oldContent).not.toEqual(newContent);
		});
	 });    

});


}());
