---
weight : 30 
title: 그룹 메시지
---

# 그룹메시지
그룹메시지는 대량메시지 뿐만 아니라 소량의 메시지도 안전하게 발송할 수 있는 메커니즘을 제공합니다.

### 기존 API의 문제점
대량의 메시지를 프로그램 내에서 루프를 돌며 서버에 발송 요청을 합니다. 이 과정에서 프로그램의 오류 혹은 일시적인 네트워크 오류로 메시지의 누락이 발생할 수 있습니다.

### 쿨에스엠에스 그룹메시지의 개선된 기능

일반적으로 아래의 단계를 거치면서 안전하게 발송 할 수 있습니다. 
: 그룹생성 > 메시지추가 > 리뷰 > 발송

그룹생성 단계에서는 메시지를 담을 바구니를 하나 생성한다고 생각하시면 됩니다.

그 바구니(그룹)에 메시지를 추가하고 제대로 담겼는지 확인(리뷰) 후 발송하는 순서입니다.
발송 단계에서는 발송 스위치만 켜는 역할로 이미 발송하려는 메시지 내용이 모두 서버에 전송되고 리뷰가 완료된 상태입니다.

* [그룹 생성](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)

* [그룹 정보](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)
* [그룹 삭제](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)
* [그룹 목록](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)
* [그룹메시지 추가](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)
* [그룹메시지 삭제](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)
* [그룹메시지 목록](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)
* [그룹메시지 발송](http://wiley.dev.nurigo.net:46205/?php#그룹-생성)

## 그룹 생성
메세지를 담을 그룹을 생성하여 그룹아이디를 리턴합니다. 
생성된 그룹은 24시간 후에 자동 삭제됩니다.

### Resource URL
`https://solapi.com/GroupMessage/3/createGroup`

{{% syntaxParser %}}
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
{{% /syntaxParser %}}

### Required Parameters
필수 입력 사항이 없습니다.

### Optional Parameters
groupOptions
  : 그룹 옵션

  : appId
    : 어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다.
    : 자세한 안내는 [http://www.coolsms.co.kr/sp](http://www.coolsms.co.kr/sp) 을 참고하세요.

  : appVersion
    : 어플리케이션 버전, 예) Purplebook 4.1

  : testMode
    : 값이 true 이면 CARRIER 시뮬레이터로 시뮬레이션됩니다. 
    : 수신번호를 반드시 01000000000 ~ 01000009999 범위 내에서 테스트합니다. 결과값은 60으로 고정됩니다.
    : 입력 가능한 값
      : `false` *default* 
        : 메시지를 실제 발송합니다. 
      : `true`
        : 테스트 모드로 실제 발송하지 않고 내부 시뮬레이션을 타게 합니다.

  : forceSms
    : 누리고푸시를 사용하더라도 푸시로 발송하지 않고 문자메시지로 발송합니다.
    : 입력 가능한 값
      : `true`
        : 강제 문자 발송 
      : `false` *default*
        : 푸시 발송 실패시 문자 발송 
   
  : onlyAta
    
  : osPlatform
    : 클라이언트의 OS 및 플랫폼 버전, 예) CentOS 6.6

  : devLanguage
    : 개발 프로그래밍 언어, 예) PHP 5.3.3

  : sdkVersion
    : SDK 버전, 예) PHP SDK 1.5

  : scheduledDate
    : YYYY-MM-DD HH:MI:SS 포맷의 예약시간.

### 예약시간
예약시간을 입력하면 해당 시간에 메시지를 발송합니다.

예약시간 입력시 YYYY-MM-DD HH:MI:SS 포맷으로 입력합니다.

입력 없거나 지난날짜를 입력하면 바로 전송

예) 2017-06-16 09:05:10 (2017년 06월 16일 9시 5분 10초에 발송되도록 예약)

{{< syntaxParser >}}
> Response Syntax
```json
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
``` 
{{< /syntaxParser >}}
### Optional Parameters
**groupOptions**
  : 그룹 옵션
 
  : appId
    : 어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다. 자세한 안내는 [http://www.coolsms.co.kr/sp](http://www.coolsms.co.kr/sp) 을 참고하세요.
 
  : appVersion 
    : 어플리케이션 버전, 예) Purplebook 4.1

  : testMode
    : 값이 true 이면 CARRIER 시뮬레이터로 시뮬레이션됩니다.<br/>수신번호를 반드시 01000000000 ~ 01000009999 범위 내에서 테스트합니다. 결과값은 60으로 고정됩니다.
    : 입력 가능한 값
      : `false` *default*
        : 메시지를 실제 발송합니다.
      : `true` 
        : 테스트 모드로 실제 발송하지 않고 내부 시뮬레이션을 타게 합니다.


  : forceSms
    : 누리고푸시를 사용하더라도 푸시로 발송하지 않고 문자메시지로 발송합니다.
    : 입력 가능한 값
      : `true`
        : 강제 문자 발송
      : `false` *default*
        : 푸시 발송 실패시 문자 발송

  : onlyAta
  : osPlatform
    : 클라이언트의 OS 및 플랫폼 버전, 예) CentOS 6.6

  : devLanguage
    : 개발 프로그래밍 언어, 예) PHP 5.3.3

  : sdkVersion
    : SDK 버전, 예) PHP SDK 1.5

  : apiVersion
    : API 버전

  : count
    : 발송하려는 메시지의 타입별 갯수

  : price
    : unitPrice
      : 발송하려는 메시지의 타입별 단가
    : calculatedPrice
      : 발송하려는 메시지의 타입별 비용
  : ttl
    : 초단위의 남은 TimeToLive 시간

### Errors
공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.

> Request Sample

```bash
$ curl -X POST https://solapi.com/GroupMessage/3/createGroup \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[ISO 8601 DATE], Salt=[UNIQID], Signature=[SIGNATURE]" \
    -d '{"groupOptions": {}}'
```
```javascript
request(
  {
    url: "https://solapi.com/GroupMessage/3/createGroup",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]`
    },
    json: {
      "groupOptions" : {
      }
    }
  }
) 
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request("POST","/GroupMessage/3/createGroup",'{"groupOptions" : {}}',{"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]"})
conn.close()
```
```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/createGroup"); //requset URL
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATA], Salt=[SALT], Signature=[SIGNATURE])');
curl_setopt($ch, CURLOPT_POSTFIELDS, '{"groupOptions" : {}}');
curl_exec($ch);
curl_close($ch);
?>
```

> Response Sample

```json
{
  "groupId":"[GROUP_ID]",
  "groupOptions":
  {
    "appId":"null",
    "appVersion":"null",
    "apiVersion":"3",
    "forceSms":"false",
    "onlyAta":"false",
    "osPlatform":"null",
    "devLanguage":"null",
    "sdkVersion":"null"
  },
  "count":
  {
    "sms":0,
    "lms":0,
    "mms":0,
    "ata":0,
    "cta":0,
    "push":0
  },
  "price":
  {
    "unitPrice":
    {
      "sms":20,
      "lms":50,
      "mms":200,
      "ata":15,
      "cta":20,
      "push":5
    },
    "calculatedPrice":
    {
      "sms":0,
      "lms":0,
      "mms":0,
      "ata":0,
      "cta":0,
      "push":0,
      "total":0
    }
  },
  "ttl":7200
}
```


## 그룹 정보
그룹 정보를 리턴합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/group/{groupId}/getGroupInfo`

{{% syntaxParser %}}

> Request Syntax
```json

```

{{% /syntaxParser %}}

### Required Parameters
필수 입력 사항이 없습니다.

### Optional Parameters
선택 입력 사항이 없습니다.

{{% syntaxParser %}}

> Response Syntax

```json
{
  "groupId": "String",
  "groupOptions": {
    "appId": "String",
    "appVersion": "String",
    "mode": "String",
    "forceSms": "String",
    "onlyAta": "String",
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

```

{{% /syntaxParser %}}

groupId
  : 메시지가 속한 [그룹의 고유 ID](#)
  : 메시지 아이디의 형식은 아래와 같습니다.
  : `G3V20170603213426FCCBJW1J3H9GAAG`
  : `PPPDDDDDDDDDDDDDDHHHHHHHHHHHHHHH`
  : `PPP(3)`
  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`DDDDDDDDDDDDDD(14)`
  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`HHHHHHHHHHHHHHH(15)`
  : `P : Preamble (3)`
  : `D : Date (14)`
  : `H : Hash Key (15)`

groupOptions
  : 그룹 옵션
  : appId
    : 어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다. 자세한 안내는 http://www.coolsms.co.kr/sp 을 참고하세요.
  : appVersion
    : 어플리케이션 버전, 예) Purplebook 4.1
  : testMode
   : 값이 true 이면 CARRIER 시뮬레이터로 시뮬레이션됩니다. 수신번호를 반드시 01000000000 ~ 01000009999 범위 내에서 테스트합니다. 결과값은 60으로 고정됩니다.
   : 입력 가능한 값
      : `false` *default*
        : 메시지를 실제 발송합니다.
      : `true`
        : 테스트 모드로 실제 발송하지 않고 내부 시뮬레이션을 타게 합니다.
  : forceSms
    : 누리고푸시를 사용하더라도 푸시로 발송하지 않고 문자메시지로 발송합니다.
    : 입력 가능한 값
      : `true`
        : 강제 문자 발송
      : `false` *default*
        : 푸시 발송 실패시 문자 발송
  : onlyAta
  : osPlatform
    : 클라이언트의 OS 및 플랫폼 버전, 예) CentOS 6.6
  : devLanguage
    : 개발 프로그래밍 언어, 예) PHP 5.3.3
  : sdkVersion
    : SDK 버전, 예) PHP SDK 1.5
  : apiVersion
    : API 버전
  : count
    : 발송하려는 메시지의 타입별 갯수
  : price
    : unitPrice
      : 발송하려는 메시지의 타입별 단가
  : calculatedPrice
    : 발송하려는 메시지의 타입별 비용
  : ttl
    : 초단위의 남은 TimeToLive 시간

### Errors
공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.

: **ResourceNotFound**
 : 존재하지 않는 그룹, 이미 TTL 시간이 만료되었거나 올바르지 않은 그룹아이디를 입력 
 : HTTP Status Code: 404

> Request Sample

```bash
$ curl -X POST https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getGroupInfo \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[ISO 8601 DATE], Salt=[UNIQID], Signature=[SIGNATURE]"
```
```javascript
request(
  {
    url: "https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getGroupInfo", 
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]`
    },
    json: {}
  }
)
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request("POST","/GroupMessage/3/group/[GROUP_ID]/getGroupInfo",'',{"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]"})
conn.close()
```
```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getGroupInfo"); //requset URL
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]'));
curl_exec($ch);
curl_close($ch);
```

> Response Sample

```json
{
    "groupId": "[GROUP_ID]",
    "groupOptions": {
        "appId": "null",
        "appVersion": "null",
        "apiVersion": "3",
        "forceSms": "false",
        "onlyAta": "false",
        "osPlatform": "null",
        "devLanguage": "null",
        "sdkVersion": "null"
    },
    "count": {
        "sms": 0,
        "lms": 0,
        "mms": 0,
        "ata": 0,
        "cta": 0,
        "push": 0,
        "total": 0
    },
    "price": {
        "unitPrice": {
            "sms": 20,
            "lms": 50,
            "mms": 200,
            "ata": 15,
            "cta": 20,
            "push": 5
        },
        "calculatedPrice": {
            "sms": 0,
            "lms": 0,
            "mms": 0,
            "ata": 0,
            "cta": 0,
            "push": 0,
            "total": 0
        }
    },
    "ttl": 6706
}
```

## 그룹 삭제
생성된 그룹을 삭제하며 해당 그룹에 등록된 모든 메시지도 함께 제거됩니다.

### Resource URL
`https://solapi.com/GroupMessage/3/deleteGroups`

{{% syntaxParser %}}

> Request Syntax

```json
{
  "groups": [
    {
      "groupId": "String"
    },
    ...
  ],
}
```

{{% /syntaxParser %}}

### Required Parameters

groups
  : groupId
    : 메시지가 속한 그룹의 고유 ID

### Optional Parameters
옵션사항이 없습니다

### Limits
하나의 요청에 삭제할 수 있는 그룹 수는 최대 10개 입니다.

{{% syntaxParser %}}

> Response Syntax

```json
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

{{% /syntaxParser %}}

errorCount
  : 오류 발생 건수

resultList
  : groupId
    : 메시지가 속한 그룹의 고유 ID
resultCode
  : 아래 코드 중 하나가 리턴됩니다.
    : `Success`
      : 성공
    : `ResourceNotFound`
      : 그룹ID에 해당하는 그룹이 존재하지 않습니다.
    : `InternalError`
      : 내부 서부 오류로 인해 정상처리 되지 않았습니다.

### Errors
공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.

  : TooManyGroups
    : 입력 가능한 그룹 수 10개를 초과하였습니다.
    : HTTP Status Code: 413

> Request Sample
```bash
$ curl -X POST https://solapi.com/GroupMessage/3/deleteGroups \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]" \
    -d '{"groups" : [{"groupId": "[GROUP_ID]"}]}'
```
```javascript
request(
  {
    url: "https://solapi.com/GroupMessage/3/deleteGroups",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=NCSGMRA9DY2DUXYH, Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]`
    },
    json: {
      "groups" : [
        {
          "groupId": "[GROUP_ID]"
        }
      ]
    }
  }
)
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request("POST","/GroupMessage/3/deleteGroups",'{"groups" : [{"groupId": "G311123918RABMQZZF9EFO6MX"}]}',{"Authorization":"HMAC-SHA256 ApiKey=NCSGMRA9DY2DUXYH, Date="+timestamp+", Salt="+salt+", Signature="+signature.hexdigest()+""})
conn.close()
```
```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/deleteGroups"); //requset URL
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
 'Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]'
));
curl_setopt($ch, CURLOPT_POSTFIELDS, '{"groups" : [{"groupId": "[GROUP_ID]"}]}');
curl_exec($ch);
curl_close($ch);
```





