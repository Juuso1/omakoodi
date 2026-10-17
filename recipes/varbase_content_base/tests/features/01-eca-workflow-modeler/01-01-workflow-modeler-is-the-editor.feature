Feature: ECA Workflow Modeler - the Workflow Modeler is the ECA editor
      As a site administrator applying the Varbase Content Base recipe on its own
      I want the ECA "add model" flow to open the Workflow Modeler
      So that automations on this recipe are authored with the Workflow Modeler and no other editor.

  # Applied in isolation, this recipe pulls in only the Workflow Modeler
  # (drupal/modeler), never BPMN.iO. With a single editor available, the ECA
  # "add" route resolves straight to the Workflow Modeler add form.

  @check @local @development @staging @production
  Scenario: Check that adding a new ECA model opens the Workflow Modeler
    Given I am logged in as the administrator
     When I go to "/admin/config/workflow/eca/add"
     Then the path should be "/admin/config/workflow/eca/add/workflow_modeler"
      And I should see "Create new ECA model"

  @check @local @development @staging @production
  Scenario: Check that the Workflow Modeler add form opens directly
    Given I am logged in as the administrator
     When I go to "/admin/config/workflow/eca/add/workflow_modeler"
     Then I should see "Create new ECA model"
      And the url should match "/admin/config/workflow/eca/add/workflow_modeler$"
