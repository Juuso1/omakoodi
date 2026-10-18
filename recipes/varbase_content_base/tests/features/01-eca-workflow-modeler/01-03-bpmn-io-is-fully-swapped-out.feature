Feature: ECA Workflow Modeler - BPMN.iO is fully swapped out
      As a site builder applying the Varbase Content Base recipe on its own
      I want the recipe to enable the Workflow Modeler stack and ship no BPMN.iO
      So that the Workflow Modeler is the single ECA editor with no leftover BPMN.iO modules or config.

  # Recipe contract checks (state, not markup): the recipe swapped BPMN.iO for
  # the Workflow Modeler. Applied in isolation the Workflow Modeler stack is
  # enabled, BPMN.iO is never installed, no config object mentions bpmn, and the
  # shipped model is tagged for the Workflow Modeler.

  @check @local @development @staging @production
  Scenario: Check that the Workflow Modeler stack is enabled and BPMN.iO is not
    Then the "modeler" module should be enabled
     And the "modeler_api" module should be enabled
     And the "eca" module should be enabled
     And the "eca_ui" module should be enabled
     And the "bpmn_io" module should not be enabled

  @check @local @development @staging @production
  Scenario: Check that no configuration object references BPMN.iO
    Then the ECA model "redirect_403_to_login" should be tagged with the modeler id "workflow_modeler"
     And no configuration object name should contain "bpmn"

  @check @local @development @staging @production
  Scenario: Check that both shipped ECA models are tagged for the Workflow Modeler
    Then the ECA model "redirect_403_to_login" should be tagged with the modeler id "workflow_modeler"
     And the ECA model "enable_full_view_mode_node_type" should be tagged with the modeler id "workflow_modeler"
