import { testingUrl } from '../../appsettings.json';
import { searchBar, brandsSearchResult, productGridHeader, 
    readTheStoryButton, basedInLocation, yearEstablished, 
    storyOfBusiness, productContainer, emailInput, 
    creteAccountInput } from '../../CompositeFolder/Selectors/UserSelectors';

fixture `Getting Started`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
    });


test('Select brand must send user to the brands page', async t => {
    // Search for tiramisu paperie and click top search result
    await t.click(searchBar)
            .typeText(searchBar,"tiramisu paperie")
            .click(brandsSearchResult.child('li').nth(0));

    // get product grid header text content to see if companies name still matches original search
    const getResultsFromSearchPage = (await productGridHeader.textContent).toLowerCase();

    // assert the original search and current page match
    await t.expect(getResultsFromSearchPage).contains("tiramisu paperie");
});

test('Testing brand page, ensure info about company is visible and accessible', async t => {
    // Search for tiramisu paperie and click top search result
    await t.click(searchBar)
            .typeText(searchBar,"tiramisu paperie")
            .click(brandsSearchResult.child('li').nth(0));

    // get product grid header text content to see if companies name still matches original search
    const getResultsFromSearchPage = (await productGridHeader.textContent).toLowerCase();
    await t.expect(getResultsFromSearchPage).contains("tiramisu paperie");

    // click read the story button for the company in relation
    await t.click(readTheStoryButton);
    const businessStory = storyOfBusiness.textContent;

    // assert were its been made, when founded and a story of some sort exists in story container
    await t.expect(basedInLocation.nextSibling(1).textContent).contains("Huntsville, Alabama")
        .expect(yearEstablished.nextSibling(1).textContent).contains("2014")
        .expect((await businessStory).length).gt(3);
});


test('clicking product on brand page should prompt login', async t => {
    // Search for tiramisu paperie and click top search result
    await t.click(searchBar)
            .typeText(searchBar,"tiramisu paperie")
            .click(brandsSearchResult.child('li').nth(0));

    // find a product of brand page and click it
    await t.click(productContainer)
        // should assert that the login dialog is presented to user.
        .expect(emailInput.exists).eql(true)
        .expect(creteAccountInput.exists).eql(true);
});