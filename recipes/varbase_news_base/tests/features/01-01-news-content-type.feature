Feature: News Base - News post content type
      As a Content editor
      I want a News post content type with the fields the recipe defines
      So that I can capture a news post's title, summary, content and media.

  # The Varbase News Base recipe adds the "news" bundle. The add form must
  # expose the exact fields the recipe ships: Title, a Featured image, a
  # Description summary, the rich-text Content, the Categories reference and
  # Tags. Asserting the field labels proves the content type and its field
  # configuration are present, not just that a page loads.
  @check @local @development @staging @production
  Scenario: The News post add form exposes the News fields to a Content editor
    Given I am a logged in user with the "Content editor" user
     When I go to "/node/add/news"
      And wait
     Then I should see "Create News post"
      And I should see "Title"
      And I should see "Featured image"
      And I should see "Description"
      And I should see "Content"
      And I should see "Categories"
      And I should see "Tags"
      And "#edit-title-0-value" should be visible within 10 seconds
      And "#edit-field-news-categories" should be visible within 10 seconds
