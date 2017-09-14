---
weight : 30
title: 메시지로그 조회
---

# 메시지로그 조회
발송 요청된 메시지 로그를 조회합니다. 접수만 되고 발송 요청되지 않은 메시지는 로그로 남지 않으므로 조회 대상이 아닙니다. 레코드 정렬은 메시지 생성시각(dateCreated) 기준 내림차순으로 최근의 메시지가 먼저 조회됩니다.

### Resource URL
`https://solapi.com/MessageLog/3/getSentMessages`

### Request Syntax

```syntax
{
  "begin": "Date",
  "end": "Date",
  "offset": Number,
  "limit": Number,
  "condition": {
    "include": {
      "groupId": "String",
      "messageId": "String",
      "to": "String",
      "from": "String",
      "type": "String",
      "networkCode": "String",
      "statusCode": "String",
      "appId": "String"
    },
      "exclude": {
      "groupId": "String",
      "messageId": "String",
      "to": "String",
      "from": "String",
      "type": "String",
      "networkCode": "String",
      "statusCode": "String",
      "appId": "String"
    }
  }
}
```

> Request Sample
```bash
test
```
### Required Parameters
필수 입력 사항이 없습니다.
### Optional Parameters
begin
  : 조회 시작 일시를 입력합니다. 기본값은 오늘날짜의 0시 0분 0초입니다.

end
  : 조회 끝 일시를 입력합니다. 기본값은 오늘날짜의 현재 시각입니다.

%include 0 ./fragments/offset.md
%include 0 ./fragments/limit.md

condition
  : 조건을 주어 원하는 레코드들만 조회 할 수 있습니다.
  : include
    : 서브 파라메터의 입력값에 해당되는 레코드들만 리턴합니다. 두 개 이상 입력시 AND 연산으로 처리합니다.

%include 6 ./fragments/groupId.md
%include 6 ./fragments/messageId.md
%include 6 ./fragments/shortTo.md
%include 6 ./fragments/from.md
%include 6 ./fragments/messageLogType.md
%include 6 ./fragments/networkCode.md
%include 6 ./fragments/statusCode.md
%include 6 ./fragments/appId.md

  : exclude
    : 서브 파라메터의 입력값을 제외한 나머지 레코드들만 리턴합니다. 두 개 이상 입력시 AND 연산으로 처리합니다.

%include 6 ./fragments/groupId.md
%include 6 ./fragments/messageId.md
%include 6 ./fragments/shortTo.md
%include 6 ./fragments/from.md
%include 6 ./fragments/messageLogType.md
%include 6 ./fragments/networkCode.md
%include 6 ./fragments/statusCode.md
%include 6 ./fragments/appId.md

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
      },
      "customFields": {
        "myCustomField": {Map} | [Array] | "String" | Number /* 사용자 정의 필드  */
      },
      "dateCreated": "Date",
      "statusCode": "String",
      "dateReceived": "Date",
      "networkCode": "String",
      "networkName": "String"
},
    ...
  }
}
```

> Response Sample

```json
test
```

%include 0 ./fragments/totalCount.md
%include 0 ./fragments/offset.md
%include 0 ./fragments/limit.md

messageList
  : Map 형식의 조회된 메시지 목록

%include 2 ./fragments/messageId.md
%include 4 ./fragments/groupId.md
%include 6 ./fragments/shortTo.md
%include 6 ./fragments/from.md
%include 6 ./fragments/text.md
%include 6 ./fragments/messageLogType.md
%include 6 ./fragments/country.md
    : subject
      : type이 LMS, MMS 일 때 제목
%include 6 ./fragments/imageId.md
%include 6 ./fragments/scheduledDate.md
%include 6 ./fragments/kakaoOptions.md
    : customFields
      : 사용자정의 필드를 개수 제한없이 총 160 자까지 입력할 수 있습니다. 요청에 대한 응답에 그대로 리턴되며 발송 이후 메시지로그에서도 조회 가능합니다.
    : dateCreated
      : 생성된 시각

%include 6 ./fragments/statusCode.md
    : dateReceived
      : 단말기로 수신된 날짜와 시각

%include 6 ./fragments/networkCode.md
    : networkName
      : 이동통신사 이름

%include 0 ./fragments/errors.md
