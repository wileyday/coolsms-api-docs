## 예약메시지 취소 - 그룹

그룹단위로 예약메시지 취소를 요청합니다.

### Resource URL

`https://solapi.com/ScheduledMessage/3/cancelScheduledGroups`

### Request Syntax

```syntax
{
  "groups": [
    {
      "groupId": "String" /* required */
    },
    ...
  ]
}
```

> Sample Request

%include 0 ./samples/cancelScheduledGroups.md

**Required Parameters**

groups
: Array 형식의 그룹ID 목록

%include 0 ../fragments/groupId.md

**Optional Parameters**

선택 옵션이 없습니다.

### Limits

하나의 요청에 취소 가능한 그룹수는 10 개입니다.

### Response Syntax

```syntax
{
  "errorCount": Number,
  "resultList": [
    {
      "groupId": "String",
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
      "groupId": "GID587C220F0734A",
      "resultCode": "Success"
    }
  ]
}
```

errorCount
: 오류 카운트

resultList
: Array 형식의 결과 목록

%include 2 ../fragments/groupId.md

  resultCode
  : 아래 코드 중 하나가 리턴 됩니다.

    `Success`
    : 성공

    `ResourceNotFound`
    : 그룹ID에 해당하는 그룹이 존재하지 않습니다.

    `InternalError`
    : 내부 서버 오류로 인해 정상처리 되지 않았습니다.

### Errors

공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.
