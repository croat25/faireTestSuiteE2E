import { testingUrl } from '../../appsettings.json';
import { searchBar, suggestedTerm, productTileCdnPath, 
    emailInput, creteAccountInput, productTileName } from '../../CompositeFolder/Selectors/UserSelectors';


fixture `Getting Started`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
        });

test('complete a search using search bar', async t => {
    await t.click(searchBar)
            .typeText(searchBar,"candles")
            .pressKey('enter');
});

test('Search for candles, suggestions should be recommended as part of search, 5 in total', async t => {
    // Search for item
    await t.click(searchBar)
        .typeText(searchBar,"candles")
    // expect 5 suggestions for candles search term
        .expect(suggestedTerm.child('li').count).eql(5)
        .click(suggestedTerm.child('li').nth(0));

    const getResultsFromSearchPage = productTileCdnPath;
    const getTextContentOfProductName = productTileName.textContent;
    
    // expect product page to be visible and assert click on product triggers login dialog box
    await t.expect(getResultsFromSearchPage.exists).eql(true)
        .expect((await getTextContentOfProductName).length).gt(2);

});

test('Search for item, results page has items to choose from, clicking on item brings up login page', async t => {
    // Search for item
    await t.click(searchBar)
        .typeText(searchBar,"candles");

    // click on first suggested search result
    await t.click(suggestedTerm.child('li').nth(0));

    // fetch first item from products displayed as part of result from search
    // expect product page to be visible and assert click on product triggers login dialog box
    await t.expect(productTileCdnPath.exists).eql(true)
        .click(productTileCdnPath)
        .expect(emailInput.exists).eql(true)
        .expect(creteAccountInput.exists).eql(true)
        .expect(creteAccountInput.exists).eql(true);
});