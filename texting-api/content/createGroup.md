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
<br/>발송 단계에서는 발송 스위치만 켜는 역할로 이미 발송하려는 메시지 내용이 모두 서버에 전송되고 리뷰가 완료된 상태입니다.

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
<br/>생성된 그룹은 24시간 후에 자동 삭제됩니다.

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
**groupOptions**
: 그룹 옵션

: **appId**
 : 어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다.<br/>자세한 안내는 [http://www.coolsms.co.kr/sp](http://www.coolsms.co.kr/sp) 을 참고하세요.

: **appVersion**
 : 어플리케이션 버전, 예) Purplebook 4.1
: **testMode**
 : 값이 true 이면 CARRIER 시뮬레이터로 시뮬레이션됩니다. <br/>수신번호를 반드시 01000000000 ~ 01000009999 범위 내에서 테스트합니다. 결과값은 60으로 고정됩니다.
 
 : 입력 가능한 값
  : <code>false</code> *default*<br/> 메시지를 실제 발송합니다. 
  : <code>true</code> <br/> 테스트 모드로 실제 발송하지 않고 내부 시뮬레이션을 타게 합니다.

: **forceSms**
 : 누리고푸시를 사용하더라도 푸시로 발송하지 않고 문자메시지로 발송합니다.
 
 : 입력 가능한 값
  : <code>true</code> <br/> 강제 문자 발송 
  : <code>false</code> *default*<br/> 푸시 발송 실패시 문자 발송 
 
: **onlyAta**
: **osPlatform**
 : 클라이언트의 OS 및 플랫폼 버전, 예) CentOS 6.6

: **devLanguage**
 : 개발 프로그래밍 언어, 예) PHP 5.3.3

: **sdkVersion**
 : SDK 버전, 예) PHP SDK 1.5

: **scheduledDate**
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
 
: **appId**
 : 어플리케이션을 구분하는 ID 로 사용되며 솔루션 제공에 대한 수수료 정산의 기준이 되는 ID 이기도 합니다. 자세한 안내는 [http://www.coolsms.co.kr/sp](http://www.coolsms.co.kr/sp) 을 참고하세요.
 
: **appVersion**
 : 어플리케이션 버전, 예) Purplebook 4.1

: **testMode**
 : 값이 true 이면 CARRIER 시뮬레이터로 시뮬레이션됩니다.<br/>수신번호를 반드시 01000000000 ~ 01000009999 범위 내에서 테스트합니다. 결과값은 60으로 고정됩니다.
  
 : 입력 가능한 값
  : <code>false</code> *default*
   : 메시지를 실제 발송합니다.
  : <code>true</code> 테스트 모드로 실제 발송하지 않고 내부 시뮬레이션을 타게 합니다.


: **forceSms**
 : 누리고푸시를 사용하더라도 푸시로 발송하지 않고 문자메시지로 발송합니다.

 : 입력 가능한 값

: **onlyAta**
: **osPlatform**
 : 클라이언트의 OS 및 플랫폼 버전, 예) CentOS 6.6

: **devLanguage**
 : 개발 프로그래밍 언어, 예) PHP 5.3.3

: **sdkVersion**
 : SDK 버전, 예) PHP SDK 1.5

: **apiVersion**
 : API 버전

: **count**
 : 발송하려는 메시지의 타입별 갯수

: **price**
 : **unitPrice**
  : 발송하려는 메시지의 타입별 단가
 
 : **calculatedPrice**
  : 발송하려는 메시지의 타입별 비용
: **ttl**
 : 초단위의 남은 TimeToLive 시간

### Errors
공통적으로 일어날 수 있는 오류 코드를 확인하시려면 오류코드 를 참고하세요.

## 그룹 정보

