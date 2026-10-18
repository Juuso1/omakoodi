Feature: News Base - News listing filters
      As a site visitor
      I want to filter the news listing by keyword and by Type
      So that I can find the news posts that interest me.

  # The seeded fixture provides 15 news posts titled "Varbase Example News NN"
  # (8 in the Announcements category, 7 in Press Releases). Filtering by that
  # keyword isolates the fixture, so the result count is deterministic
  # regardless of any other content on the site.
  @check @local @development @staging @production
  Scenario: Filtering the news listing by keyword narrows the results
    Given I am an anonymous user
     When I go to "/news"
      And wait
      And I fill in "Search by" with "Varbase Example News"
      And I press "Apply Filter"
      And wait
     Then the news result summary should show a total of 15
      And I should see "Varbase Example News 01"

  # Combining the keyword with the Type filter narrows the fixture to its 8
  # Announcements posts, proving the Type (News Categories) exposed filter works.
  @check @local @development @staging @production
  Scenario: Filtering the news listing by keyword and Type narrows the results
    Given I am an anonymous user
     When I go to "/news"
      And wait
      And I fill in "Search by" with "Varbase Example News"
      And I choose "Announcements" in the news Type filter
      And I press "Apply Filter"
      And wait
     Then the news result summary should show a total of 8
