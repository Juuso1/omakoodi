Feature: News Base - Editing a news post
      As a Content editor
      I want to edit a news post I created
      So that I can correct its details after publishing.

  # Creates a minimal news post, reopens it on its edit form, changes the
  # title, saves, and asserts the news post page shows the new title (and not
  # the old one). Self-contained: it deletes the news post it created.
  @check @local @development @staging @production
  Scenario: A Content editor edits a news post's title
    Given I am a logged in user with the "Content editor" user
     When I go to "/node/add/news"
      And wait
      And I fill in "Title" with "Varbase Example Edit News 73502 before"
      And I fill in "Description" with "Summary for the edit test news post 73502."
      And I save the news post
     Then I should see "Varbase Example Edit News 73502 before"
     When I open the edit form for the news post I am viewing
      And I fill in "Title" with "Varbase Example Edit News 73502 after"
      And I save the news post
     Then I should see "Varbase Example Edit News 73502 after"
      And I should not see "Varbase Example Edit News 73502 before"
     When I delete the news post I am viewing
     Then I should see "has been deleted"
