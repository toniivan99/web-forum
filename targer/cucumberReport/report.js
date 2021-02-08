$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addcomment.feature");
formatter.feature({
  "line": 1,
  "name": "Добавяне на коментари към тема",
  "description": "",
  "id": "добавяне-на-коментари-към-тема",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Добавяне на коментари към тема",
  "description": "",
  "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на коментар към тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда съдържанието на коментара \"\u003ccontent\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима потребителското име на потребителя \"\u003cuser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима заглавието на темата \"\u003ctopic\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Натиска бутона за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Вижда съобщение на екрана \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема;",
  "rows": [
    {
      "cells": [
        "content",
        "user",
        "topic",
        "expectedMessage"
      ],
      "line": 11,
      "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема;;1"
    },
    {
      "cells": [
        "Hello",
        "Ivan",
        "Test",
        "Успешно добавихте коментар"
      ],
      "line": 12,
      "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема;;2"
    },
    {
      "cells": [
        "",
        "Ivan",
        "Test",
        "Моля въведете съдържание на коментара"
      ],
      "line": 13,
      "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Добавяне на коментари към тема",
  "description": "",
  "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на коментар към тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда съдържанието на коментара \"Hello\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима потребителското име на потребителя \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима заглавието на темата \"Test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Натиска бутона за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Вижда съобщение на екрана \"Успешно добавихте коментар\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddCommentSteps.openAddCommentPage()"
});
formatter.result({
  "duration": 125369501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 47
    }
  ],
  "location": "AddCommentSteps.getCommentContent(String)"
});
formatter.result({
  "duration": 2824400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 52
    }
  ],
  "location": "AddCommentSteps.getUserName(String)"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    }
  ],
  "location": "AddCommentSteps.getTopicName(String)"
});
formatter.result({
  "duration": 113700,
  "status": "passed"
});
formatter.match({
  "location": "AddCommentSteps.clickAddCommentButton()"
});
formatter.result({
  "duration": 64486299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно добавихте коментар",
      "offset": 27
    }
  ],
  "location": "AddCommentSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 2198700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Добавяне на коментари към тема",
  "description": "",
  "id": "добавяне-на-коментари-към-тема;добавяне-на-коментари-към-тема;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на коментар към тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда съдържанието на коментара \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима потребителското име на потребителя \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима заглавието на темата \"Test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Натиска бутона за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Вижда съобщение на екрана \"Моля въведете съдържание на коментара\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddCommentSteps.openAddCommentPage()"
});
formatter.result({
  "duration": 208800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    }
  ],
  "location": "AddCommentSteps.getCommentContent(String)"
});
formatter.result({
  "duration": 70699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 52
    }
  ],
  "location": "AddCommentSteps.getUserName(String)"
});
formatter.result({
  "duration": 125501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    }
  ],
  "location": "AddCommentSteps.getTopicName(String)"
});
formatter.result({
  "duration": 97501,
  "status": "passed"
});
formatter.match({
  "location": "AddCommentSteps.clickAddCommentButton()"
});
formatter.result({
  "duration": 33001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете съдържание на коментара",
      "offset": 27
    }
  ],
  "location": "AddCommentSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 268900,
  "status": "passed"
});
formatter.uri("deletecomment.feature");
formatter.feature({
  "line": 1,
  "name": "Изтриване на коментар от тема",
  "description": "",
  "id": "изтриване-на-коментар-от-тема",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Изтриване на коментар от тема",
  "description": "",
  "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на коментара",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима съдържанието на коментара \"\u003ccontent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Системата взима потребителското име на потребителят \"\u003cuser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на името на темата към която е коментара \"\u003ctopicName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на коментара",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Вижда съобщението на екрана \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема;",
  "rows": [
    {
      "cells": [
        "content",
        "user",
        "topicName",
        "expectedMessage"
      ],
      "line": 11,
      "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема;;1"
    },
    {
      "cells": [
        "Hello",
        "Ivan",
        "Test",
        "Успешно изтрихте коментара"
      ],
      "line": 12,
      "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема;;2"
    },
    {
      "cells": [
        "Hello",
        "Gosho",
        "Test",
        "Нямате права да изтриете коментара"
      ],
      "line": 13,
      "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Изтриване на коментар от тема",
  "description": "",
  "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на коментара",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима съдържанието на коментара \"Hello\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Системата взима потребителското име на потребителят \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на името на темата към която е коментара \"Test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на коментара",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Вижда съобщението на екрана \"Успешно изтрихте коментара\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteCommentSteps.openDeleteCommentPage()"
});
formatter.result({
  "duration": 258800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 43
    }
  ],
  "location": "DeleteCommentSteps.getCommentContent(String)"
});
formatter.result({
  "duration": 263899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 53
    }
  ],
  "location": "DeleteCommentSteps.getUserName(String)"
});
formatter.result({
  "duration": 81101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 64
    }
  ],
  "location": "DeleteCommentSteps.getTopicName(String)"
});
formatter.result({
  "duration": 70300,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 3251200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно изтрихте коментара",
      "offset": 29
    }
  ],
  "location": "DeleteCommentSteps.checkDeletedMessage(String)"
});
formatter.result({
  "duration": 81599,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Изтриване на коментар от тема",
  "description": "",
  "id": "изтриване-на-коментар-от-тема;изтриване-на-коментар-от-тема;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на коментара",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима съдържанието на коментара \"Hello\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Системата взима потребителското име на потребителят \"Gosho\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на името на темата към която е коментара \"Test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на коментара",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Вижда съобщението на екрана \"Нямате права да изтриете коментара\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteCommentSteps.openDeleteCommentPage()"
});
formatter.result({
  "duration": 56101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 43
    }
  ],
  "location": "DeleteCommentSteps.getCommentContent(String)"
});
formatter.result({
  "duration": 66299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 53
    }
  ],
  "location": "DeleteCommentSteps.getUserName(String)"
});
formatter.result({
  "duration": 60400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 64
    }
  ],
  "location": "DeleteCommentSteps.getTopicName(String)"
});
formatter.result({
  "duration": 59401,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 115200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Нямате права да изтриете коментара",
      "offset": 29
    }
  ],
  "location": "DeleteCommentSteps.checkDeletedMessage(String)"
});
formatter.result({
  "duration": 67500,
  "status": "passed"
});
formatter.uri("deletetopic.feature");
formatter.feature({
  "line": 1,
  "name": "Изтриване на тема",
  "description": "",
  "id": "изтриване-на-тема",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Изтриване на тема",
  "description": "",
  "id": "изтриване-на-тема;изтриване-на-тема",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на темата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима името на темата \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя \"\u003cuser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "изтриване-на-тема;изтриване-на-тема;",
  "rows": [
    {
      "cells": [
        "name",
        "user",
        "expectedMessage"
      ],
      "line": 10,
      "id": "изтриване-на-тема;изтриване-на-тема;;1"
    },
    {
      "cells": [
        "Test",
        "Ivan",
        "Успешно изтрихте темата"
      ],
      "line": 11,
      "id": "изтриване-на-тема;изтриване-на-тема;;2"
    },
    {
      "cells": [
        "",
        "Ivan",
        "Моля въведете името на темата"
      ],
      "line": 12,
      "id": "изтриване-на-тема;изтриване-на-тема;;3"
    },
    {
      "cells": [
        "Test",
        "Gosho",
        "Нямате права да изтриете темата"
      ],
      "line": 13,
      "id": "изтриване-на-тема;изтриване-на-тема;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Изтриване на тема",
  "description": "",
  "id": "изтриване-на-тема;изтриване-на-тема;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на темата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима името на темата \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение \"Успешно изтрихте темата\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteTopicSteps.openDeletePage()"
});
formatter.result({
  "duration": 124501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 33
    }
  ],
  "location": "DeleteTopicSteps.getTopicName(String)"
});
formatter.result({
  "duration": 79401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 38
    }
  ],
  "location": "DeleteTopicSteps.getUserName(String)"
});
formatter.result({
  "duration": 87599,
  "status": "passed"
});
formatter.match({
  "location": "DeleteTopicSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 2719500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно изтрихте темата",
      "offset": 17
    }
  ],
  "location": "DeleteTopicSteps.checkDeletedMessage(String)"
});
formatter.result({
  "duration": 99300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Изтриване на тема",
  "description": "",
  "id": "изтриване-на-тема;изтриване-на-тема;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на темата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима името на темата \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение \"Моля въведете името на темата\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteTopicSteps.openDeletePage()"
});
formatter.result({
  "duration": 67500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "DeleteTopicSteps.getTopicName(String)"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 38
    }
  ],
  "location": "DeleteTopicSteps.getUserName(String)"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "location": "DeleteTopicSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете името на темата",
      "offset": 17
    }
  ],
  "location": "DeleteTopicSteps.checkDeletedMessage(String)"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Изтриване на тема",
  "description": "",
  "id": "изтриване-на-тема;изтриване-на-тема;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя натиска бутона за изтриване на темата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Системата взима името на темата \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя \"Gosho\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за потвърждение за изтриване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение \"Нямате права да изтриете темата\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteTopicSteps.openDeletePage()"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 33
    }
  ],
  "location": "DeleteTopicSteps.getTopicName(String)"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 38
    }
  ],
  "location": "DeleteTopicSteps.getUserName(String)"
});
formatter.result({
  "duration": 400600,
  "status": "passed"
});
formatter.match({
  "location": "DeleteTopicSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Нямате права да изтриете темата",
      "offset": 17
    }
  ],
  "location": "DeleteTopicSteps.checkDeletedMessage(String)"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Вход на потребитя във форума",
  "description": "",
  "id": "вход-на-потребитя-във-форума",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Вход на потребитя във форума",
  "description": "",
  "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщение \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expectedMessage"
      ],
      "line": 10,
      "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;1"
    },
    {
      "cells": [
        "Ivan",
        "123",
        "Успешно влезнахте в системата"
      ],
      "line": 11,
      "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;2"
    },
    {
      "cells": [
        "Ivan1",
        "123",
        "Невалиден потребител"
      ],
      "line": 12,
      "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;3"
    },
    {
      "cells": [
        "",
        "123",
        "Моля въведете потребителско име"
      ],
      "line": 13,
      "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;4"
    },
    {
      "cells": [
        "Ivan",
        "",
        "Моля въведете парола"
      ],
      "line": 14,
      "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Вход на потребитя във форума",
  "description": "",
  "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име \"Ivan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщение \"Успешно влезнахте в системата\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "duration": 233801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 39
    }
  ],
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "duration": 761099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 28
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 83500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 3575099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно влезнахте в системата",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 96099,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Вход на потребитя във форума",
  "description": "",
  "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име \"Ivan1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщение \"Невалиден потребител\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "duration": 721299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan1",
      "offset": 39
    }
  ],
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 28
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 101399,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден потребител",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 70901,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Вход на потребитя във форума",
  "description": "",
  "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщение \"Моля въведете потребителско име\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 39
    }
  ],
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "duration": 85900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 28
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 36401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете потребителско име",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 320100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Вход на потребитя във форума",
  "description": "",
  "id": "вход-на-потребитя-във-форума;вход-на-потребитя-във-форума;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име \"Ivan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщение \"Моля въведете парола\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "duration": 209500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 39
    }
  ],
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "duration": 134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 86599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 27999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете парола",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 71900,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Регистрация на потребител във форума",
  "description": "",
  "id": "регистрация-на-потребител-във-форума",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Регистрация на потребител във форума",
  "description": "",
  "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име за регистрация \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола за регистрация \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщението на екрана \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expectedMessage"
      ],
      "line": 10,
      "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;1"
    },
    {
      "cells": [
        "tony",
        "123",
        "Регистрацията е успешна"
      ],
      "line": 11,
      "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;2"
    },
    {
      "cells": [
        "",
        "123",
        "Моля въведете потребителско име"
      ],
      "line": 12,
      "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;3"
    },
    {
      "cells": [
        "tony",
        "",
        "Моля въведете парола"
      ],
      "line": 13,
      "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;4"
    },
    {
      "cells": [
        "Ivan",
        "123",
        "Потребителското име е заето"
      ],
      "line": 14,
      "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Регистрация на потребител във форума",
  "description": "",
  "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име за регистрация \"tony\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола за регистрация \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщението на екрана \"Регистрацията е успешна\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterPage()"
});
formatter.result({
  "duration": 113700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony",
      "offset": 54
    }
  ],
  "location": "RegisterSteps.enterUsername(String)"
});
formatter.result({
  "duration": 177400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 43
    }
  ],
  "location": "RegisterSteps.enterPassword(String)"
});
formatter.result({
  "duration": 95799,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 855300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Регистрацията е успешна",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.checkRegisterMessage(String)"
});
formatter.result({
  "duration": 83400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Регистрация на потребител във форума",
  "description": "",
  "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име за регистрация \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола за регистрация \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщението на екрана \"Моля въведете потребителско име\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterPage()"
});
formatter.result({
  "duration": 63499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 54
    }
  ],
  "location": "RegisterSteps.enterUsername(String)"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 43
    }
  ],
  "location": "RegisterSteps.enterPassword(String)"
});
formatter.result({
  "duration": 265400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете потребителско име",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.checkRegisterMessage(String)"
});
formatter.result({
  "duration": 302001,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Регистрация на потребител във форума",
  "description": "",
  "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име за регистрация \"tony\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола за регистрация \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщението на екрана \"Моля въведете парола\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterPage()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony",
      "offset": 54
    }
  ],
  "location": "RegisterSteps.enterUsername(String)"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    }
  ],
  "location": "RegisterSteps.enterPassword(String)"
});
formatter.result({
  "duration": 65101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 356101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете парола",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.checkRegisterMessage(String)"
});
formatter.result({
  "duration": 58399,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Регистрация на потребител във форума",
  "description": "",
  "id": "регистрация-на-потребител-във-форума;регистрация-на-потребител-във-форума;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда потребителско име за регистрация \"Ivan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда парола за регистрация \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натиска бутона за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Получава съобщението на екрана \"Потребителското име е заето\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterPage()"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 54
    }
  ],
  "location": "RegisterSteps.enterUsername(String)"
});
formatter.result({
  "duration": 55101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 43
    }
  ],
  "location": "RegisterSteps.enterPassword(String)"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 81800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Потребителското име е заето",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.checkRegisterMessage(String)"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
formatter.uri("subtopic.feature");
formatter.feature({
  "line": 1,
  "name": "Добавяне на подтема във форума",
  "description": "",
  "id": "добавяне-на-подтема-във-форума",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Добавяне на подтема във форума",
  "description": "",
  "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на подтема към съществуваща тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на подтемата \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда съдържание на подтемата \"\u003ccontent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на потребителя като автор на подтемата \"\u003cuser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Системата взима името на основната тема \"\u003cparentTopic\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя натиска бутона за създаване на подтемата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщението \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;",
  "rows": [
    {
      "cells": [
        "name",
        "content",
        "user",
        "parentTopic",
        "expectedMessage"
      ],
      "line": 12,
      "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;1"
    },
    {
      "cells": [
        "sub topic",
        "sub topic content",
        "Ivan",
        "Test",
        "Успешно добавихте подтемата"
      ],
      "line": 13,
      "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;2"
    },
    {
      "cells": [
        "",
        "sub topic content",
        "Ivan",
        "Test",
        "Моля въведете име на подтемата"
      ],
      "line": 14,
      "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;3"
    },
    {
      "cells": [
        "sub topic",
        "",
        "Ivan",
        "Test",
        "Моля въведете съдържание за подтемата"
      ],
      "line": 15,
      "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Добавяне на подтема във форума",
  "description": "",
  "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на подтема към съществуваща тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на подтемата \"sub topic\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда съдържание на подтемата \"sub topic content\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на потребителя като автор на подтемата \"Ivan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Системата взима името на основната тема \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя натиска бутона за създаване на подтемата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщението \"Успешно добавихте подтемата\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewSubTopicSteps.openNewSubTopicPage()"
});
formatter.result({
  "duration": 261100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub topic",
      "offset": 38
    }
  ],
  "location": "NewSubTopicSteps.enterSubTopicName(String)"
});
formatter.result({
  "duration": 81900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub topic content",
      "offset": 45
    }
  ],
  "location": "NewSubTopicSteps.enterSubTopicContent(String)"
});
formatter.result({
  "duration": 88299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 62
    }
  ],
  "location": "NewSubTopicSteps.getSubTopicAuthorName(String)"
});
formatter.result({
  "duration": 83500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 41
    }
  ],
  "location": "NewSubTopicSteps.getParentTopicName(String)"
});
formatter.result({
  "duration": 77900,
  "status": "passed"
});
formatter.match({
  "location": "NewSubTopicSteps.clickCreateSubTopicButton()"
});
formatter.result({
  "duration": 1010499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно добавихте подтемата",
      "offset": 19
    }
  ],
  "location": "NewSubTopicSteps.checkMessage(String)"
});
formatter.result({
  "duration": 92900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Добавяне на подтема във форума",
  "description": "",
  "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на подтема към съществуваща тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на подтемата \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда съдържание на подтемата \"sub topic content\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на потребителя като автор на подтемата \"Ivan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Системата взима името на основната тема \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя натиска бутона за създаване на подтемата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщението \"Моля въведете име на подтемата\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewSubTopicSteps.openNewSubTopicPage()"
});
formatter.result({
  "duration": 186700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "NewSubTopicSteps.enterSubTopicName(String)"
});
formatter.result({
  "duration": 85799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub topic content",
      "offset": 45
    }
  ],
  "location": "NewSubTopicSteps.enterSubTopicContent(String)"
});
formatter.result({
  "duration": 86500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 62
    }
  ],
  "location": "NewSubTopicSteps.getSubTopicAuthorName(String)"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 41
    }
  ],
  "location": "NewSubTopicSteps.getParentTopicName(String)"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "location": "NewSubTopicSteps.clickCreateSubTopicButton()"
});
formatter.result({
  "duration": 974400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете име на подтемата",
      "offset": 19
    }
  ],
  "location": "NewSubTopicSteps.checkMessage(String)"
});
formatter.result({
  "duration": 148901,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Добавяне на подтема във форума",
  "description": "",
  "id": "добавяне-на-подтема-във-форума;добавяне-на-подтема-във-форума;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на подтема към съществуваща тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на подтемата \"sub topic\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Потребителя въвежда съдържание на подтемата \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Системата взима името на потребителя като автор на подтемата \"Ivan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Системата взима името на основната тема \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя натиска бутона за създаване на подтемата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщението \"Моля въведете съдържание за подтемата\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewSubTopicSteps.openNewSubTopicPage()"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub topic",
      "offset": 38
    }
  ],
  "location": "NewSubTopicSteps.enterSubTopicName(String)"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "NewSubTopicSteps.enterSubTopicContent(String)"
});
formatter.result({
  "duration": 82500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 62
    }
  ],
  "location": "NewSubTopicSteps.getSubTopicAuthorName(String)"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 41
    }
  ],
  "location": "NewSubTopicSteps.getParentTopicName(String)"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.match({
  "location": "NewSubTopicSteps.clickCreateSubTopicButton()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете съдържание за подтемата",
      "offset": 19
    }
  ],
  "location": "NewSubTopicSteps.checkMessage(String)"
});
formatter.result({
  "duration": 100400,
  "status": "passed"
});
formatter.uri("topic.feature");
formatter.feature({
  "line": 1,
  "name": "Добавяне на тема във форума",
  "description": "",
  "id": "добавяне-на-тема-във-форума",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Добавяне на тема във форума",
  "description": "",
  "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на нова тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на темата \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя като автор \"\u003cuser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя въвежда съдържание на темата \"\u003ccontent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за създаване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Получава съобщението \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;",
  "rows": [
    {
      "cells": [
        "name",
        "user",
        "content",
        "expectedMessage"
      ],
      "line": 11,
      "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;1"
    },
    {
      "cells": [
        "example",
        "Ivan",
        "example content",
        "Успешно добавихте темата"
      ],
      "line": 12,
      "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;2"
    },
    {
      "cells": [
        "",
        "Ivan",
        "example content",
        "Моля въведете име на темата"
      ],
      "line": 13,
      "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;3"
    },
    {
      "cells": [
        "example",
        "Ivan",
        "",
        "Моля въведете съдържание за темата"
      ],
      "line": 14,
      "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Добавяне на тема във форума",
  "description": "",
  "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на нова тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на темата \"example\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя като автор \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя въвежда съдържание на темата \"example content\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за създаване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Получава съобщението \"Успешно добавихте темата\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewTopicSteps.openNewTopicPage()"
});
formatter.result({
  "duration": 111399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example",
      "offset": 35
    }
  ],
  "location": "NewTopicSteps.enterTopicName(String)"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 49
    }
  ],
  "location": "NewTopicSteps.getAuthorName(String)"
});
formatter.result({
  "duration": 86801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example content",
      "offset": 42
    }
  ],
  "location": "NewTopicSteps.enterTopicContent(String)"
});
formatter.result({
  "duration": 260600,
  "status": "passed"
});
formatter.match({
  "location": "NewTopicSteps.clickCreateTopicButton()"
});
formatter.result({
  "duration": 1019599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно добавихте темата",
      "offset": 22
    }
  ],
  "location": "NewTopicSteps.checkMessage(String)"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Добавяне на тема във форума",
  "description": "",
  "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на нова тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на темата \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя като автор \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя въвежда съдържание на темата \"example content\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за създаване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Получава съобщението \"Моля въведете име на темата\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewTopicSteps.openNewTopicPage()"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 35
    }
  ],
  "location": "NewTopicSteps.enterTopicName(String)"
});
formatter.result({
  "duration": 59999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 49
    }
  ],
  "location": "NewTopicSteps.getAuthorName(String)"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example content",
      "offset": 42
    }
  ],
  "location": "NewTopicSteps.enterTopicContent(String)"
});
formatter.result({
  "duration": 57399,
  "status": "passed"
});
formatter.match({
  "location": "NewTopicSteps.clickCreateTopicButton()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете име на темата",
      "offset": 22
    }
  ],
  "location": "NewTopicSteps.checkMessage(String)"
});
formatter.result({
  "duration": 78899,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Добавяне на тема във форума",
  "description": "",
  "id": "добавяне-на-тема-във-форума;добавяне-на-тема-във-форума;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Потребителя отваря страницата за добавяне на нова тема",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Потребителя въвежда име на темата \"example\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Системата взима името на потребителя като автор \"Ivan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя въвежда съдържание на темата \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителя натиска бутона за създаване на темата",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Получава съобщението \"Моля въведете съдържание за темата\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewTopicSteps.openNewTopicPage()"
});
formatter.result({
  "duration": 200600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example",
      "offset": 35
    }
  ],
  "location": "NewTopicSteps.enterTopicName(String)"
});
formatter.result({
  "duration": 494199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 49
    }
  ],
  "location": "NewTopicSteps.getAuthorName(String)"
});
formatter.result({
  "duration": 58199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "NewTopicSteps.enterTopicContent(String)"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "NewTopicSteps.clickCreateTopicButton()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете съдържание за темата",
      "offset": 22
    }
  ],
  "location": "NewTopicSteps.checkMessage(String)"
});
formatter.result({
  "duration": 65400,
  "status": "passed"
});
});