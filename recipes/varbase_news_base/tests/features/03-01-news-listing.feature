Feature: News Base - News listing
      As a site visitor
      I want a news listing at /news with cards, a summary and filters
      So that I can browse and narrow down the site's news posts.

  # The listing renders each news post as a card in a grid, 12 per page, above
  # a result summary. Filtering to the 15-post fixture makes the counts
  # deterministic: the summary range "1-12 of 15" asserts the 12-per-page
  # paging in a theme-agnostic way, and a marker post's card link + title prove
  # the cards render.
  @check @local @development @staging @production
  Scenario: The news listing shows news cards and a result summary
    Given I am an anonymous user
     When I go to "/news?search=Varbase+Example+News"
      And wait
     Then I should see text matching "1-12 of 15"
      And I should see "Varbase Example News 01"
      And "a[href='/news/varbase-example-news-01']" should have a count of 1

  # The recipe exposes a keyword ("Search by") filter plus the Type (News
  # Categories) and Industry (Tags) taxonomy filters. Assert all three are
  # present so a regression that drops one is caught.
  @check @local @development @staging @production
  Scenario: The news listing exposes the keyword, Type and Industry filters
    Given I am an anonymous user
     When I go to "/news?search=Varbase+Example+News"
      And wait
     Then I should see "Search by"
      And I should see "Type"
      And I should see "Industry"
