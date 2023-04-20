import { Selector } from 'testcafe';

export const searchBar = Selector('input[id="top-search"]');
export const suggestedTerm = Selector('ul[data-test-id="suggested-terms"]');
export const productTileCdnPath = Selector('div[data-test-id="product-tile"]').nth(0).child(1).child(0).child(0).child(0).child(0).withAttribute("src",/.+cdn.faire.com.+/);
export const productTileName = Selector('span[data-test-id="handler-visible-container"]');
export const emailInput = Selector('input[data-test-id="email"]');
export const creteAccountInput = Selector('button[data-test-id="createAccountButton"]');

export const brandsSearchResult = Selector('ul[data-test-id="brands"]');
export const productGridHeader = Selector('h1[data-test-id="productGridHeader"]').child('span');
export const readTheStoryButton = Selector('button').withText("Read Their Story");
export const basedInLocation = Selector("p").withText("Based In");
export const yearEstablished = Selector("p").withText("Established");
export const storyOfBusiness = Selector("p").withAttribute("class",/.+_StoryContainer.+/);

export const productContainer = Selector('div[data-test-id="productsContainer"]').nth(1).child(0);