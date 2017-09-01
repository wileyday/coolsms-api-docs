---
weight: 30
title: 문자발송 API
---

---
weight: 20
title: API Reference
---

# 문자발송 API

쿨에스엠에스의 REST API Reference 내용을 담고 있습니다.

*참고*

  REST는 Representational State Transfer의 약자로 API 연동 규격을 명확하게 정의되고 쉽게 구현 할 수 있습니다. <https://ko.wikipedia.org/wiki/REST> 

쿨에스엠에스 SMS REST API 서버로 Request를 보내기 위해서 인증을 거쳐야 합니다. authentication 를 참고하세요.

## Resource URL 구성

`https://solapi.com/<ServiceName>/<Version>/[<ResourcePath>]/<Function>`

ServiceName  

- [SimpleMessage](#SimpleMessage)
- [GroupMessage](#GroupMessage)
- [ScheduledMessage](#ScheduledMessage)
- [MessageLog](#MessageLog)

Version  
  - 서비스 버전

ResourcePath  
  - 필요시 특정 리소스 경로를 나타냅니다

Function
  - 서비스 혹은 리소스의 함수를 나타냅니다

## Types

이 문서에서 JSON 형식으로 구성된 Syntax를 설명할 때 사용되는 파라메터들의 형식을 아래와 같이 표기합니다.

### {Map}
Key: Value 형식의 데이터를 담을 수 있습니다.

`
{
  "key1": "value1",
  ...
}
`

### \[Array\]  
배열 형식으로 같은 형식의 데이터를 담는 역할을 합니다.

`
[
  "value1",
  "value2",
  ...
]
`

### “String”  
문자열의 파라메터를 표현합니다.

`
"value"
`

### “Date”  
날짜형식의 문자열을 표현합니다.

`
"2017-06-06 16:49:02"
`

### Number  
숫자를 나타냅니다.

`
369
`

### “Boolean”  
참, 거짓값을 문자열로 표현합니다.

`
"true",
"false"
`
## 그룹메시지

그룹메시지는 대량메시지 뿐만 아니라 소량의 메시지도 안전하게 발송할 수 있는 메커니즘을 제공합니다.


**기존 API의 문제점**

대량의 메시지를 프로그램 내에서 루프를 돌며 서버에 발송 요청을 합니다. 이 과정에서 프로그램의 오류 혹은 일시적인 네트워크 오류로 메시지의 누락이 발생할 수 있습니다.


**쿨에스엠에스 그룹메시지의 개선된 기능**

일반적으로 아래의 단계를 거치면서 안전하게 발송 할 수 있습니다.

`그룹생성 > 메시지추가 > 리뷰 > 발송`

그룹생성 단계에서는 메시지를 담을 바구니를 하나 생성한다고 생각하시면 됩니다.

그 바구니(그룹)에 메시지를 추가하고 제대로 담겼는지 확인(리뷰) 후 발송하는 순서입니다.

발송 단계에서는 발송 스위치만 켜는 역할로 이미 발송하려는 메시지 내용이 모두 서버에 전송되고 리뷰가 완료된 상태입니다.
### 그룹 생성

메시지를 담을 그룹을 생성하여 그룹아이디를 리턴합니다. 생성된 그룹은 24시간 후에 자동 삭제됩니다.

#### Resource URL

`https://solapi.com/GroupMessage/3/createGroup`


#### Request Syntax

##### Required Parameters

필수 입력 사항이 없습니다.


##### Optional Parameters

**groupOptions** 그룹 옵션

- **appId**:
어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다. 자세한 안내는 http://www.coolsms.co.kr/sp 을 참고하세요.

Parameter | Default | Description
----------|---------|------------
appId


> Request Syntax

```json
  {
    "groupOptions": {
      "appId": "String",
      "appVersion": "String",
      "testMode": "String",
      "forceSms": "String",
      "osPlatform": "String",
      "devLanguage": "String",
      "sdkVersion": "String",
      "scheduledDate": "Date"
    }
  }
```

#### Response Syntax

.. code-block:: javascript

  {
    "groupId": "String",
    "groupOptions": {
      "appId": "String",
      "appVersion": "String",
      "testMode": "String",
      "forceSms": "String",
      "osPlatform": "String",
      "devLanguage": "String",
      "sdkVersion": "String",
      "apiVersion": "String"
    },
    "count": {
      "sms": Number,
      "lms": Number,
      "mms": Number,
      "ata": Number,
      "cta": Number,
      "push": Number,
      "total": Number
    },
    "price": {
      "unitPrice": {
        "sms": Number,
        "lms": Number,
        "mms": Number,
        "ata": Number,
        "cta": Number,
        "push": Number
      },
      "calculatedPrice": {
        "sms": Number,
        "lms": Number,
        "mms": Number,
        "ata": Number,
        "cta": Number,
        "push": Number,
        "total": Number
      }
    },
    "ttl": Number
  }

.. include:: ../fragments/groupInfo.response.rst


#### Errors

공통적으로 일어날 수 있는 오류 코드를 확인하시려면 :doc:`../errors` 를 참고하세요.


#### Sample Request

.. code-block:: http

  POST /GroupMessage/3/createGroup HTTP/1.1
  Content-Length: 330
  Content-Type: application/json
  Authorization: HMAC-MD5 apiKey=NCSMC84SPIYSCZTH, date=2017-04-24T02:51:50Z, salt=myakpnj1vj0znv, signature=42059bffe55154aa51cc3eda8b8763b5

  {
    "groupOptions": {
      "appId": "K0123456789",
      "testMode": "false",
      "forceSms": "false",
      "osPlatform": "Centos 9",
      "devLanguage": "Python 3.4",
      "sdkVersion": "SDKv3ForPaython",
      "appVersion": "SampleApp v1.0"
    }
  }


#### Sample Response

.. code-block:: http

  HTTP/1.1 200 OK
  Content-Type: application/json
  Content-Length: 675

  {
    "groupId": "GID587C220F0734A",
    "groupOptions": {
      "appId": "K0123456789",
      "testMode": "false",
      "forceSms": "false",
      "osPlatform": "Centos 9",
      "devLanguage": "Python 3.4",
      "sdkVersion": "SDKv3ForPaython",
      "appVersion": "SampleApp v1.0"
    },
    "count": {
      "sms": 1,
      "lms": 1,
      "mms": 0,
      "ata": 0,
      "cta": 0,
      "push": 0,
      "total": 2
    },
    "price": {
      "unitPrice": {
        "sms": 20,
        "lms": 50,
        "mms": 200,
        "ata": 15,
        "cta": 25,
        "push": 5
      },
      "calculatedPrice": {
        "sms": 20,
        "lms": 50,
        "mms": 0,
        "ata": 0,
        "cta": 0,
        "push": 0,
        "total": 70
      }
    },
    "ttl": 3600
  }

.. include:: ../fragments/footer.rst

