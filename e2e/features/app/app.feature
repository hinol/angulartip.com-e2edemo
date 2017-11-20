@appView
Feature: App should works


  Background:
    Given I go to color page

  Scenario: App should init
    When Run step color
    Then Should has some configurations