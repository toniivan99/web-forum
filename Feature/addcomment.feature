Feature: Добавяне на коментари към тема
  Scenario Outline: Добавяне на коментари към тема
    Given Потребителя отваря страницата за добавяне на коментар към тема
    When Потребителя въвежда съдържанието на коментара "<content>"
    And Системата взима потребителското име на потребителя "<user>"
    And Системата взима заглавието на темата "<topic>"
    And Натиска бутона за добавяне на коментар
    Then Вижда съобщение на екрана "<expectedMessage>"

    Examples:
      |content|user|topic|expectedMessage|
      |Hello  |Ivan|Test |Успешно добавихте коментар|
      |       |Ivan|Test |Моля въведете съдържание на коментара|