---
weight: 20
title: 메시지발송
---

# 메시지발송

1,000건 이하의 소량의 문자메시지를 발송합니다. 대량의 문자메시지를 안정적으로 발송하려면 [그룹메시지](#GroupMessage) 을 사용하세요.


## Resource URL

`https://solapi.com/SimpleMessage/3/sendMessages`

## Request Syntax

```syntax
  {
    "messages": [
      {
        "to": { /* required */
          "recipient": "String",
          "recipients": [
            "String",
            ...
          ],
          "recipientsWithCustomFields": [
            {
              "recipient": "String",
              "customFields": {
                "myCustomField": {Map} | [Array] | "String" | Number,  /* 사용자 정의 필드 */
                ...
              }
            },
          ],
        },
        "from": "String", /* required */
        "text": "String", /* required */
        "type": "String",
        "country": "String",       
        "subject": "String",      
        "imageId": "String",
        "kakaoOptions": {
          "senderKey": "String",
          "templateCode": "String",
          "buttonName": "String",
          "buttonUrl": "String",
          "disableSms": "Boolean"
        }
      },
      ...
    ],
    "groupOptions": {
      "appId": "String",
      "appVersion": "String",
      "mode": "String",
      "forceSms": "String",
      "onlyAta": "String",
      "osPlatform": "String",
      "devLanguage": "String",
      "sdkVersion": "String",
      "scheduledDate": "Date"
    }
  }
```

### Required Parameters

messages
: [Array] 형식의 메시지 발송 정보

%include 2 ./fragments/to.md
%include 2 ./fragments/from.md
%include 2 ./fragments/text.md

### Optional Parameters

messages
: [Array] 형식의 메시지 발송 정보

%include 2 ./fragments/type.md
%include 2 ./fragments/country.md
%include 2 ./fragments/subject.md
%include 2 ./fragments/imageId.md
%include 2 ./fragments/scheduledDate.md
%include 2 ./fragments/kakaoOptions.md

%include 0 ./fragments/groupOptions.md

> Sample Request

```bash
$ curl -X POST https://solapi.com/SimpleMessage/3/sendMessages \
    --header "Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]" \
    -d '{
          "messages": [
            {
              "to": {"recipient": "01000000001"},
              "from": "0212345678",
              "text": "테스트 문자",
              "type": "SMS"
            }
          ], "options": { }
        }'
```
```javascript
request(
  {
    url: "https://solapi.com/SimpleMessage/3/sendMessages",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]`
    },
    json: {
      "messages": [
        {
          "to": {"recipient": "01000000001"},
          "from": "0212345678",
          "text": "테스트 문자",
          "type": "SMS"
        }
      ], "options": { }
    }
  }
)
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request(
  "POST",
  "/SimpleMessage/3/sendMessages",
  json.dumps(
    {
      "messages": [
        {
          "to": {"recipient": "01000000001"},
          "from": "0212345678",
          "text": "테스트 문자",
          "type": "SMS"
        }
      ], "options": { }
    }
  ),
  {"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]"})
conn.close()
```
```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/SimpleMessage/3/sendMessages"); //requset URL
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATA], Salt=[SALT], Signature=[SIGNATURE])');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(
    {
      "messages": [
        {
          "to": {"recipient": "01000000001"},
          "from": "0212345678",
          "text": "테스트 문자",
          "type": "SMS"
        }
      ], "options": { }
    }
));
curl_exec($ch);
curl_close($ch);
?>
```

> Sample Parameters

```json
  {
    "messages": [
      {
        "to": {
          "recipient": "01000000001",
          "recipients": [
            "01000000002",
            "01000000003"
          ],
          "recipientsWithCustomFields": [
            {
              "recipient": "01000000004",
              "customFields": {
                "mySequence": 1
              }
            },
            {
              "recipient": "01000000004", // 수신번호 중복
              "customFields": {
                "mySequence": 2
              }
            },
            {
              "recipient": "01000000005",
              "customFields": {
                "mySequence": 3
              }
            }            
          ]
        },
        "from": "0212345678",
        "text": "테스트 문자",
        "type": "AUTO",
        "country": "82",
      }
    ],
    "groupOptions": {
      "appId": "K0123456789",
      "osPlatform": "Centos 9",
      "devLanguage": "Python 3.4",
      "sdkVersion": "SDKv3ForPaython",
      "appVersion": "SampleApp v1.0"
    }
  }
```
## Limits

메시지발송 API에서 하나의 요청에 대해 아래와 같은 두가지 제한사항이 있습니다.

  - 하나의 요청의 총 데이터 크기는 10MB를 넘을 수 없습니다.
  - 하나의 요청에 대해 수신번호는 1,000개를 넘을 수 없습니다. 

## Response Syntax

```syntax
  {
    "errorCount": Number,
    "resultList": [
      {
        "recipient": "String",
        "messageId": "String",
        "type": "String",
        "statusCode": "String",
        "customFields": {
          ...
        }        
      }
    ],
  }
```

errorCount
: 오류 카운트

resultList
: Array 형식의 결과 목록

recipient
: 수신번호

messageId
: 메시지의 고유 ID

type
: 리턴 가능한 값

  `SMS`
  : 영자 90 자(한글 45 자) 이하의 단문메시지

  `LMS`
  : 영자 2,000 자(한글 1,000 자) 이하의 장문메시지

  `MMS`
  : 영자 2,000 자(한글 1,000 자) 이하의 텍스트와 1개의 이미지 를 포함하는 메시지

  `ATA`
  : 한/영 포함 1,000 자의 텍스트를 발송할 수 있는 카카오톡의 알림톡

  `CTA`
  : 한/영 포함 1,000 자의 텍스트를 보낼 수 있는 카카오톡의 친구톡
  국가번호 82(한국)외 해외문자인 경우 SMS 만 발송가능하고 LMS, MMS 는 발송불가.

statusCode
: 메시지의 상태를 나타내는 4자리의 숫자로 구성된 코드입니다. 메시지상태코드 에서 코드 목록을 확인하실 수 있습니다.

customFields
: 요청 때 입력한 값이 그대로 리턴되며 메시지로그에서도 확인할 수 있습니다.


> Sample Response
```json
  {
    "errorCount": 1,
    "resultList": [
      {
        "recipient": "01000000001",
        "messageId": "MID58E73E3A9AAB5",
        "type": "SMS",
        "resultCode": "2000"
      },
      {
        "recipient": "01000000002",
        "messageId": "MID58E8AE3A3BAB3",
        "type": "SMS",
        "resultCode": "2000"
      },
      {
        "recipient": "01000000003",
        "messageId": "MID58E8AA4B4CBC4",
        "type": "SMS",
        "resultCode": "2000"
      },
      {
        "recipient": "01000000004",
        "messageId": "MID58B8A34B43A01",
        "type": "SMS",
        "resultCode": "2000",
        "customFields": {
          "mySequence": 1
        }
      },
      {
        "recipient": "01000000004",
        "messageId": "MID58BCB129CD38B",
        "type": "SMS",
        "resultCode": "1026", // 수신번호 중복
        "customFields": {
          "mySequence": 2
        }
      },      
      {
        "recipient": "01000000005",
        "messageId": "MID58E82E312B384",
        "type": "SMS",
        "resultCode": "2000",
        "customFields": {
          "mySequence": 3
        }        
      }            
    ]
  }
```
## Errors

아래의 오류가 리턴될 수도 있습니다.

**NotEnoughBalance**

  잔액이 부족합니다.

  HTTP Status Code: 402

**NothingToSend**

  보낼 메시지가 없습니다.
  
  HTTP Status Code: 404
  
공통적으로 일어날 수 있는 오류 코드를 확인하시려면 :doc:`../errors` 를 참고하세요.


