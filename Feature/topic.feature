Feature: Добавяне на тема във форума
  Scenario Outline: Добавяне на тема във форума
    Given Потребителя отваря страницата за добавяне на нова тема
    When Потребителя въвежда име на темата "<name>"
    And Системата взима името на потребителя като автор "<user>"
    And Потребителя въвежда съдържание на темата "<content>"
    And Потребителя натиска бутона за създаване на темата
    Then Получава съобщението "<expectedMessage>"

    Examples:
      |name|user|content|expectedMessage|
      |example|Ivan|example content|Успешно добавихте темата|
      |       |Ivan|example content|Моля въведете име на темата|
      |example|Ivan|               |Моля въведете съдържание за темата|