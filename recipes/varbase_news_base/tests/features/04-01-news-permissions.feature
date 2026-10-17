Feature: News Base - News post permissions
      As a site administrator
      I want news authoring restricted to editorial roles
      So that only trusted users can create and manage news posts.

  # The recipe grants the news node permissions to the six Varbase roles the
  # way Varbase Blog Base does: anonymous and authenticated users cannot create
  # news posts; the editorial roles can.
  @check @local @development @staging @production
  Scenario: An anonymous user cannot reach the News creation form
    Given I am an anonymous user
     When I go to "/node/add/news"
      And wait
     Then I should not see "Create News post"

  @check @local @development @staging @production
  Scenario: A Normal user cannot reach the News creation form
    Given I am a logged in user with the "Normal user" user
     When I go to "/node/add/news"
      And wait
     Then I should not see "Create News post"

  @check @local @development @staging @production
  Scenario Outline: Editorial roles can reach the News creation form
    Given I am a logged in user with the "<role>" user
     When I go to "/node/add/news"
      And wait
     Then I should see "Create News post"

    Examples:
      | role           |
      | Content editor |
      | Content admin  |
      | webmaster      |

  # Proves the full create -> edit -> delete flow works for a Content editor,
  # i.e. the create/edit/delete news permissions are all granted to the role.
  @check @local @development @staging @production
  Scenario: A Content editor can create, edit and delete a news post
    Given I am a logged in user with the "Content editor" user
     When I go to "/node/add/news"
      And wait
      And I fill in "Title" with "Varbase Example Permission News 73505"
      And I fill in "Description" with "Summary for the permission test news post 73505."
      And I save the news post
     Then I should see "Varbase Example Permission News 73505"
     When I open the edit form for the news post I am viewing
      And I fill in "Description" with "Summary for the permission test news post 73505 (updated)."
      And I save the news post
     Then I should see "Varbase Example Permission News 73505"
     When I delete the news post I am viewing
     Then I should see "has been deleted"
