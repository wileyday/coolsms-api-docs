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

> Response Sample

```json
{
    "errorCount": 0,
    "resultList": [
        {
            "groupId": "[GROUP_ID]",
            "resultCode": "Success"
        }
    ]
}
```


## 그룹 목록
생성된 그룹목록을 리턴합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/getGroupList`

{{< syntaxParser >}}

> Request Syntax
```json
{
  "offset": Number,
  "limit": Number
}
```

{{< /syntaxParser >}}

### Required Parameters
필수 입력 사항이 없습니다.

### Optional Parameters
offset
  : 가져올 레코드 시작 위치
    : `0 ~ 999999`
      : 기본값은 0 입니다
limit
  : 가져올 레코드의 수
    : `1 ~ 1000`
      : 기본값은 20 입니다

{{< syntaxParser >}}

> Response Syntax
```json
{
  "totalCount": Number,
  "offset": Number,
  "limit": Number,
  "groupList": {
    "groupId": {
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
        "push": Number
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
      }
    },
    ...
  }
}
```

{{< /syntaxParser >}}

totalCount
  : 생성된 그룹 갯수
offset
  : 가져올 레코드 시작 위치
limit
  : 가져올 레코드 수
groupList
  : Map 형식의 그룹 목록을 리턴합니다.
  : groupId
    : 메시지가 속한 그룹의 고유 ID
    : groupOptions
      : appId
        : 어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다. 자세한 안내는 [http://www.coolsms.co.kr/sp](http://www.coolsms.co.kr/sp) 을 참고하세요.
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

> Request Sample

```bash
$ curl -X POST https://solapi.com/GroupMessage/3/getGroupList \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]" \ 
    -d '{"offset": [OFFSET], "limit": [LIMIT]}'
```
```javascript
request(
  {
    url: "https://solapi.com/GroupMessage/3/getGroupList", //requset url
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]`
    },
    json: {
      "offset": [OFFSET],
      "limit": [LIMIT]
    }
  }
)
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request("POST","/GroupMessage/3/getGroupList",'{"offset": [OFFSET], "limit": [LIMIT]}',{"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]"})
conn.close()
```
```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/getGroupList");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
 'Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]'
));
curl_setopt($ch, CURLOPT_POSTFIELDS, '{"offset": [OFFSET], "limit": [LIMIT]}');
curl_exec($ch);
curl_close($ch);
```

> Response Sample

```json
{
    "offset": 0,
    "limit": 20,
    "groupList": {}
}
```

## 그룹메시지 추가
그룹에 발송할 메시지를 추가합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/group/{groupId}/addMessages`

{{< syntaxParser >}}

> Request Syntax

```json
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
              "myMessageId": "String",  /* 사용자 정의 필드 */
              "mySequence": Number,     /* 사용자 정의 필드 */
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
}
```

{{< /syntaxParser >}}

### Required Parameters
messages
  : Array 형식의 메시지 발송 정보
  : to
    : 발송하려는 수신번호를 입력합니다. 수신번호는 대시(-) 등 기호를 제외한 번호만 입력합니다. 세 개의 서브파라메터 recipient , recipients , recipientsWithCustomFields 를 통틀어 1개 이상의 수신번호가 입력되어야 합니다. 한번 요청에 수신번호는 1,000 개를 넘을 수 없습니다.
    : recipient
      : 하나의 수신번호를 입력합니다.
    : recipients
      : 배열 형식의 수신번호 목록을 입력합니다.
    : recipientsWithCustomFields
      : recipient
        : 하나의 수신번호를 입력합니다.
      : customFields
        : 사용자정의 필드를 개수 제한없이 총 160 자까지 입력할 수 있습니다. 요청에 대한 응답에 그대로 리턴되며 발송 이후 메시지로그에서도 조회 가능합니다.
  : from
    : 보내는 사람의 전화번호인 [발신번호](#) 로 보통 고객센터의 전화번호를 사용하며 사전에 등록되어 있어야 합니다.
  : text
    : 메시지 내용

### Optional Parameters
messages
  : Array 형식의 메시지 발송 정보
  : type
    : 메시지 유형을 입력합니다.
    : 입력 가능한 값
      : `AUTO` *default*
        : 메시지 내용에 따라 SMS, LMS, MMS 를 발송합니다. 국가번호 82(한국)외 해외문자인 경우 SMS 로 자동변경.
      : `SMS`
        : 영자 90 자(한글 45 자) 이하의 단문메시지를 발송합니다.
      : `LMS`
        : 영자 2,000 자(한글 1,000 자) 이하의 장문메시지를 발송합니다.
      : `MMS`
        : 영자 2,000 자(한글 1,000 자) 이하의 메시지와 1개의 이미지 전송. 이미지는 300KB 이하, 2048x2048픽셀 이하인 JPEG, PNG, GIF 형식의 파일.
      : `ATA`
        : 한/영 포함 1,000 자의 텍스트를 발송할 수 있는 카카오톡의 [알림톡](#)
      : `CTA`
        : 한/영 포함 1,000 자의 텍스트를 보낼 수 있는 카카오톡의 [친구톡](#)
    : 국가번호 82(한국)외 해외문자인 경우 SMS 만 발송가능하고 LMS, MMS 는 발송불가.
  : country
    : 발송하려는 국가의 국가번호를 입력합니다.
    : 입력 가능한 값
      : `82` *default*
        : 한국
      : `81`
        : 일본
      : `86`
        : 중국
      : `886`
        : 대만
      : `1`
        : 미국
      : `기타`
        : 해당 국가의 국제전화 국가코드
        : ***참고***
          : 국제전화 국가코드는 [ITU-T](https://ko.wikipedia.org/wiki/ITU-T) 의 [E.164](https://en.wikipedia.org/wiki/E.164) 에서 지정한 [Country Calling Codes](https://en.wikipedia.org/wiki/List_of_country_calling_codes) 을 참고하세요.
    : 국가번호가 82(한국) 일 때에만 LMS, MMS 발송 가능합니다. 이외 국가에서는 SMS 만 발송 가능합니다.
  : subject
    : type이 LMS, MMS 일 때 제목
  : imageId
    : 이미지 으로 등록할 때 리턴되는 [이미지](#) ID
  : kakaoOptions
    : 카카오톡 메시지 옵션
    : senderKey
      : 알림톡 Sender Key
    : templateCode
      : 알림톡 Template Code
    : buttonName
      : 카카오톡 버튼 이름, 10 자 제한
    : buttonUrl
      : 카카오톡 버튼 URL, 100 자 제한
    : disableSms
      : 알림톡 및 친구톡 발송에 실패하여도 문자메시지로 대체하여 발송하지 않습니다.
      : 입력 가능한 값
        : `true`
          : 알림톡 실패시 문자로 대체하지 않음
        : `false` *default*
          : 알림톡 실패시 문자로 대체 발송

### Limits
그룹메시지 추가 API에 다음 3가지 제한사항이 있습니다.
  : - 요청의 총 데이터 크기는 10MB를 넘을 수 없습니다.
  : - 한번의 요청(Request)에 대해 수신번호는 1,000 개를 넘을 수 없습니다.
  : - 하나의 그룹에 담을 수 있는 메시지는 1,000,000 개 입니다.

{{< syntaxParser >}}

> Response Syntax
```json
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
  ]
}
```
{{< /syntaxParser >}}

errorCount
  : 오류 카운트
resultList
  : 수신번호 갯수만큼의 Object를 포함한 Array
  : recipient
    : 수신번호
  : messageId
    : [메시지의 고유 ID](#)
  : type
    : 리턴 가능한 값
      : `SMS`
        : 영자 90 자(한글 45 자) 이하의 단문메시지
      : `LMS`
        : 영자 2,000 자(한글 1,000 자) 이하의 장문메시지
      : `MMS`
        : 영자 2,000 자(한글 1,000 자) 이하의 텍스트와 1개의 [이미지](#) 를 포함하는 메시지
      : `ATA`
        : 한/영 포함 1,000 자의 텍스트를 발송할 수 있는 카카오톡의 [알림톡](#)
      : `CTA`
        : 한/영 포함 1,000 자의 텍스트를 보낼 수 있는 카카오톡의 [친구톡](#)
    : 국가번호 82(한국)외 해외문자인 경우 SMS 만 발송가능하고 LMS, MMS 는 발송불가.
  : statusCode
    : 메시지의 상태를 나타내는 4자리의 숫자로 구성된 코드입니다. [메시지상태코드](#) 에서 코드 목록을 확인하실 수 있습니다.
  : customFields
    : 요청 때 입력한 값이 그대로 리턴되며 메시지로그에서도 확인할 수 있습니다.

### Errors
아래 오류 중 하나가 발생할 수 있습니다.

RecipientsTooMany
  : 입력된 수신번호가 1000개를 넘음
  : HTTP Status Code: 413

공통적으로 일어날 수 있는 오류 코드를 확인하시려면 [오류코드](#)를 참고하세요.

> Request Sample
```bash
$ curl -X POST  https://solapi.com/GroupMessage/3/group/[GROUP_ID]/addMessages \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATRUE]" \
    -d '{"messages": [{"to": {"recipient": "[RECIPIENT]"},"from": "[FROM]","text": "[TEXT]","type":"[TYPE]"}]}'
```
```javascript
request(
  {
    url: "https://solapi.com/GroupMessage/3/group/[GROUP_ID]/addMessages", 
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]`
    },
    json: {
      "messages": [
        {
          "to": {
            "recipient": "[RECIPIENT]"
          },
          "from": "[FROM]",
          "text": "[TEXT]",
          "type": "[TYPE]"
        }
      ]
    }
  }
)
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request("POST","/GroupMessage/3/group/[GROUP_ID]/addMessages",'{"messages": [{"to": {"recipient": "[RECIPIENT]"},"from": "[FROM]","text": "[TEXT]","type":"[TYPE]"}]}',{"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]"})
conn.close()
```
```php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/group/[GROUP_ID]/addMessages");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
 'Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]'
));
curl_setopt($ch, CURLOPT_POSTFIELDS, '{"messages": [{"to": {"recipient": "[RECIPIENT]"},"from": "[FROM]","text": "[TEXT]","type":"[TYPE]"}]}');
curl_exec($ch);
curl_close($ch);
```

> Response Sample
```json
{
    "errorCount": 0,
    "resultList": [
        {
            "recipient": "01000000001",
            "messageId": "M3V20170911164820TCBLKDEWDTA8VOK",
            "type": "AUTO",
            "statusCode": "2000"
        }
    ]
}
```
