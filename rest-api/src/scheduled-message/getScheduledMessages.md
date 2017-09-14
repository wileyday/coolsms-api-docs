## 예약메시지 목록

예약된 메시지 목록을 리턴합니다. 이미 발송된 메시지는 조회되지 않습니다.

### Resource URL

`https://solapi.com/ScheduledMessage/3/getScheduledMessages`


### Request Syntax

```syntax
{
  "offset": Number,
  "limit": Number,
  "condition": {
    "groupId": "String",
    "messageId": "String",
    "to": "String"
  }
}
```

> Sample Requset

%include 0 ./samples/getScheduledMessages.md


#### Required Parameters


필수적으로 입력해야 할 파라메터는 없습니다.

#### Optional Parameters

%include 0 ../fragments/offset.md

%include 0 ../fragments/limit.md

condition
: 조회 조건

%include 2 ../fragments/groupId.md

%include 2 ../fragments/messageId.md

%include 2 ../fragments/to.response.md




### Response Syntax

```syntax
{
  "totalCount": Number,
  "offset": Number,
  "limit": Number,
  "messageList": {
    "messageId": {
      "groupId": "String",
      "to": "String",
      "from": "String",
      "text": "String",
      "type": "String",
      "country": "String",
      "subject": "String",
      "imageId": "String",
      "scheduledDate": "String",
      "kakaoOptions": {
        "senderKey": "String",
        "templateCode": "String",
        "buttonName": "String",
        "buttonUrl": "String"
      }
      "dateCreated": "String",
      "statusCode": "String",
      "customFields": {
        "myCustomField": {Map} | [Array] | "String" | Number /* 사용자 정의 필드  */
      }
    },
    ...
  }
}
```

> Sample Response
```json
{
  "totalCount": 1,
  "offset": 0,
  "limit": 20,
  "messageList": {
    "MID1234BCD1245": {
      "groupId": "GID534AB384FBA",
      "to": "010123456789",
      "from": "029302266",
      "country": "82",
      "type": "SMS",
      "text": "Test Message",
      "dateCreated": "2017-06-01 17:34:00",
      "scheduledDate": "2017-06-02 09:00:00",
      "statusCode": "2000"
    }
  }
}
```

%include 0 ../fragments/totalCount.md

%include 0 ../fragments/offset.md

%include 0 ../fragments/limit.md

messageList
: Map 형식의 예약메시지 목록

%include 2 ../fragments/messageId.md

%include 2 ../fragments/groupId.md

%include 2 ../fragments/to.md

%include 2 ../fragments/from.md

%include 2 ../fragments/text.md

%include 2 ../fragments/type.response.md

%include 2 ../fragments/country.response.md

%include 2 ../fragments/subject.md

%include 2 ../fragments/imageId.md

%include 2 ../fragments/scheduledDate.md

%include 2 ../fragments/kakaoOptions.md

%include 2 ../fragments/kakaoOptions.md

%include 2 ../fragments/statusCode.md

%include 2 ../fragments/customFields.md

### Errors

공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.
