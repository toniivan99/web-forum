Feature: Вход на потребитя във форума
  Scenario Outline: Вход на потребитя във форума
    Given Потребителя отваря страницата за вход в системата
    When Потребителя въвежда потребителско име "<username>"
    And Потребителя въвежда парола "<password>"
    And Потребителя натиска бутона за вход в системата
    Then Получава съобщение "<expectedMessage>"

    Examples:
      |username|password|expectedMessage|
      |Ivan    |123     |Успешно влезнахте в системата|
      |Ivan1   |123     |Невалиден потребител         |
      |        |123     |Моля въведете потребителско име|
      |Ivan    |        |Моля въведете парола|
