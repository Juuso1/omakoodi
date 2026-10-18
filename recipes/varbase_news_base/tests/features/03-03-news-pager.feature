Feature: News Base - News listing pager
      As a site visitor
      I want the news listing to paginate
      So that I can browse beyond the first page of news posts.

  # The recipe sets items_per_page to 12 with a full pager. The seeded fixture
  # (15 marker posts) exceeds one page, so filtering to the fixture shows 12
  # cards and a pager on page 1, and the remaining 3 on page 2.
  @check @local @development @staging @production
  Scenario: The news listing paginates when there are more than 12 news posts
    Given I am an anonymous user
     When I go to "/news"
      And wait
      And I fill in "Search by" with "Varbase Example News"
      And I press "Apply Filter"
      And wait
     Then the news result summary should show a total of 15
      And I should see text matching "1-12 of 15"
      And ".pager__items" should be visible
     When I go to "/news?search=Varbase+Example+News&page=1"
      And wait
     Then I should see text matching "13-15 of 15"
