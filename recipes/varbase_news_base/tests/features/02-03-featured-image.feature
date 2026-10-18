Feature: News Base - News post featured image
      As a Content editor
      I want to add a featured image to a news post from the media library
      So that the news post has a visual on its page and listing card.

  # Exercises the Featured image media_library widget end to end: opens the
  # media library, selects an existing media item, inserts it, and saves. The
  # media-library step asserts the widget shows the selected item, so a broken
  # widget fails loudly. Self-contained: it deletes the news post it created.
  @check @local @development @staging @production
  Scenario: A Content editor adds a featured image to a news post from the media library
    Given I am a logged in user with the "Content editor" user
     When I go to "/node/add/news"
      And wait
      And I fill in "Title" with "Varbase Example Image News 73503"
      And I fill in "Description" with "Summary for the featured-image test news post 73503."
      And I add the first available featured image from the media library
      And I save the news post
     Then I should see "Varbase Example Image News 73503"
     When I delete the news post I am viewing
     Then I should see "has been deleted"
