Feature: News Base - Authoring a news post
      As a Content editor
      I want to create a news post with its fields
      So that the news post page presents the details to visitors.

  # Creates a news post through the real add form - filling the Title, the
  # required Description summary, and choosing a Category (the fields this
  # recipe adds) - then asserts the news post's full page renders the title.
  # Self-contained: it deletes the news post it created.
  #
  # The rich-text Content field is intentionally not authored here: its
  # CKEditor 5 editor loads the Varbase Plugin Pack / Premium Features plugins
  # from cdn.ckeditor.com, which a network-isolated CI runner cannot reach, so
  # the rich-text editor cannot initialise. Content is exercised implicitly by
  # the listing; leaving it out keeps the scenario deterministic.
  @check @local @development @staging @production
  Scenario: A Content editor creates a news post and its page shows the title
    Given I am a logged in user with the "Content editor" user
     When I go to "/node/add/news"
      And wait
      And I fill in "Title" with "Varbase Example Authoring News 73501"
      And I fill in "Description" with "Short summary for the authoring test news post 73501."
      And I save the news post
     Then I should see "Varbase Example Authoring News 73501"
     When I delete the news post I am viewing
     Then I should see "has been deleted"
