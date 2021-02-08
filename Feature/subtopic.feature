Feature: Добавяне на подтема във форума
  Scenario Outline: Добавяне на подтема във форума
    Given Потребителя отваря страницата за добавяне на подтема към съществуваща тема
    When Потребителя въвежда име на подтемата "<name>"
    And Потребителя въвежда съдържание на подтемата "<content>"
    And Системата взима името на потребителя като автор на подтемата "<user>"
    And Системата взима името на основната тема "<parentTopic>"
    And Потребителя натиска бутона за създаване на подтемата
    Then Вижда съобщението "<expectedMessage>"

    Examples:
      |name|content|user|parentTopic|expectedMessage|
      |sub topic|sub topic content|Ivan|Test|Успешно добавихте подтемата|
      |         |sub topic content|Ivan|Test|Моля въведете име на подтемата|
      |sub topic|                 |Ivan|Test|Моля въведете съдържание за подтемата|
