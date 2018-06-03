/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*  test suite just contains related set of tests. This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /*  it tests to make sure that the allFeeds variable has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
         */
         it(' Url defined and not empty' , function(){
            allFeeds.forEach( function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });
         /* test that loops through each feed in the allFeeds object and ensures it has a Rss name defined and that the Rss is not empty.
         */

         it(' Rss defined and not empty' , function(){
            allFeeds.forEach( function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });


        
    });


    /* new test suite named "The menu" */
    describe('The menu' ,function(){
        /* test that ensures the menu element is hidden by default. 
         * hiding/showing of the menu element.
         */  
        it('is menu element hidden by default' , function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         });
         /*  test that ensures the menu changes visibility when the menu icon is clicked. 
          */
        it('visibility when the menu icon is clicked' , function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

          });
    });

    /*  a new test suite named "Initial Entries" */
    describe('Initial Entries' , function() {
        /*  test that ensures when the loadFeed function is called and completes its work.
         */
        beforeEach(function(done) {
            loadFeed(0 , function(){
            done();
            });

         });
        it('Has a single .entry element within ' , function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /*   test suite named "New Feed Selection" */
    describe('New Feed Selection' , function(){
        /*  test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
         
         */
        var $previous, $new ;
        beforeEach((done) =>{
            loadFeed(0 , function(){
                $previous = $('.feed').length;
                loadFeed(1 , function(){
                    $new = $('.feed').length;
                    done();

                });

            });
        
        });

         
        it('new feed loaded conent change' , function(){
            expect($previous).toEqual($new);
        });


    });
}());
