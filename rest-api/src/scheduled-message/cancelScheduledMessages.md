## 예약메시지 취소 - 메시지

예약메시지 취소를 요청합니다.

### Resource URL

`https://solapi.com/ScheduledMessage/3/cancelScheduledMessages`

### Request Syntax

```syntax
{
  "messages": [
    {
      "messageId": "String" /* required */
    },
    ...
  ]
}
```

> Sample Request

%include 0 ./samples/cancelScheduledMessages.md

**Required Parameters**

messages
: Array 형식의 메시지ID 목록

%include 2 ../fragments/messageId.md

**Optional Parameters**

선택옵션이 없습니다.

### Limits

하나의 요청에 취소할 수 있는 메시지의 최대 개수는 1,000 개입니다.

### Response Syntax

```syntax
{
  "errorCount": Number,
  "resultList": [
    {
      "messageId": "String",
      "resultCode": "String"
    }
  ]
}
```

> Sample Response

```json
{
  "errorCount": 0,
  "resultList": [
    {
      "messageId": "MID501B23456789",
      "resultCode": "Success"
    }
  ]
}
```

errorCount
: 오류 카운트

resultList
: Array 형식의 결과 목록

%include 0 ../fragments/messageId.md

resultCode
: 아래 코드 중 하나가 리턴됩니다.

  `Success`
  : 성공

  `MessageNotFound`
  : 메시지ID에 해당하는 메시지가 존재하지 않습니다. 예약 메시지가 아니거나 이미 발송되거나 취소된 메시지일 수 있습니다.

  `InternalError`
  : 내부 서버 오류로 인해 정상처리 되지 않았습니다.

### Errors

공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.
