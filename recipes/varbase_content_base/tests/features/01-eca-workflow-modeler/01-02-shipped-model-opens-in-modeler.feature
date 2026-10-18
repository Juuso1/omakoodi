Feature: ECA Workflow Modeler - the shipped model opens in the Workflow Modeler
      As a site administrator applying the Varbase Content Base recipe on its own
      I want the recipe's shipped "Redirect 403 to Login" model to open and render in the Workflow Modeler
      So that the automation the recipe ships can be edited in the Workflow Modeler with no JavaScript errors.

  # The recipe ships eca.eca.redirect_403_to_login tagged modeler_id:
  # workflow_modeler. Opening it in the Workflow Modeler must draw its React Flow
  # graph: five ECA plugin nodes (Response created event -> 403 condition -> And
  # -> Anonymous condition -> Redirect to URL action), authored with zero raw
  # BPMN XML, laid out by the Workflow Modeler on open.

  @check @js-fail @local @development @staging @production
  Scenario: Check that the "Redirect 403 to Login" model renders React Flow nodes in the Workflow Modeler
    Given I am logged in as the administrator
     When I go to "/admin/config/workflow/eca/redirect_403_to_login/edit_with/workflow_modeler"
     Then I should see "ECA Model: Redirect 403 to Login"
      And ".react-flow" should be visible within 15 seconds
      And I wait until at least 5 elements match ".react-flow__node"
      And ".react-flow__node" should be visible within 15 seconds
      And I should see "Response created"
      And I should see "Redirect to URL"
      And there should be no JavaScript errors
