---
weight: 10
title: 요청 인증
---

# 요청 인증

REST API를 요청(Request)할 때 HTTP 헤더에 Authorization 정보를 추가하여 인증 받을 수 있습니다. API를 요청한 계정의 소유자를 확인하는데 필수적인 절차입니다. 

*참고*

  Authorization 헤더정보를 전달하는 방식은 HTTP에서 인증을 위한 수단으로 널리 사용되고 있습니다.  `Basic access authentication <https://en.wikipedia.org/wiki/Basic_access_authentication>`_ 을 참고하세요.

쿨에스엠에스 `API Key 관리 <https://www.coolsms.co.kr/index.php?mid=service_setup&act=dispSmsconfigCredentials>`_ 페이지에서 API Key와 API Secret을 생성하여 REST API 호출에 사용합니다.

![Credential Information](/images/credential_info.png)


## Request Syntax

.. code-block:: http

  Authorization: <AuthenticationMethod> apiKey=<ApiKey>, date=<DateTime>, salt=<Salt>, signature=<Signature>

<AuthenticationMethod>
  Signature 생성 알고리즘으로 HMAC-SHA256, HMAC-MD5 중에 하나를 선택할 수 있습니다.
<ApiKey>
  발급받은 API Key를 입력합니다.
<DateTime>
  ISO 8601 규격의 날짜와 시간을 입력합니다.
<Salt>
  10 ~ 64바이트의 불규칙적이고 랜덤한 문자열을 생성하여 사용합니다.
<Signature>
  <DateTime>와 <Salt>을 하나로 연결한 문자열을 데이터로 하고 API Secret을 Key로 만들어진 HMAC 해시코드

Signature의 재사용을 막기위해서 입력된 <DateTime>이 표준시간을 기준으로 ±15분 차이가 날 경우 RequestTimeTooSkewed 오류를 리턴합니다. 또한 15분 내에 한번 사용된 Signature는 중복사용이 불가능하므로 원천적으로 재사용을 차단하고 있습니다.

  *참고*
    날짜와 시간을 표현하는데 있어서 시차와 표기법이 틀릴 수 있으므로 혼돈이 없도록 국제규격 ISO 8601을 따릅니다. `ISO 8601 <https://ko.wikipedia.org/wiki/ISO_8601>`_ 을 참고하세요.

Signature 생성
~~~~~~~~~~~~~
클라이언트에서 <DateTime> + <Salt> 를 데이터로, API Secret을 Key로 사용하여 HMAC(Hash-based Message 
Authentication Code)을 만들어진 Signature를 서버로 보내면, 서버 쪽에서도 동일한 방식으로 만들어 비교하게 됩니다. API Secret은 Signature를 생성할 때만 사용하고 외부에 노출되지 않도록 주의해야 합니다.

  *참고*
    메시지의 무결성 검증(인증)을 위한 용도로 Signature 생성 및 검증에 Hash기반의 MAC 알고리즘을 사용하고 있습니다. `Hash-based message authentication code <https://en.wikipedia.org/wiki/Hash-based_message_authentication_code>`_ 을 참고하세요.
    
Signature는 중복사용이 불가하며 15분 안에 전송되는 요청(Request)의 Signature 값은 항상 달라야 합니다. 그래서 Salt는 매번 요청때마다 다른 문자열로 변경하여 요청 시간대가 같아도 항상 Signature가 다른 값으로 생성되도록 합니다.

아래는 PHP에서 Signature를 HMAC-SHA256으로 생성하는 코드입니다.

.. code-block:: php

  $api_key = 'NCSJHQYTPNB4DHEB';
  $api_secret  = '62YSRABVESTZIPD6OHRCCPIOYV69UETF';
  $date = date('c');
  $salt = uniqid();
  $hmac_data = $date.$salt;
  $signature = hash_hmac('sha256', $hmac_data, $api_secret);

Errors
---------------

아래의 오류가 발생할 수 있습니다.

**InvalidAPIKey**

  유효한 API Key가 아님
  
  HTTP Status Code: 403
  
**SignatureDoesNotMatch**

  생성한 Signature가 일치하지 않음
  
  HTTP Status Code: 403

**RequestTimeTooSkewed**

  시간 값이 서버 시간을 15분 이상 벗어남
  
  HTTP Status Code: 403
  
**DuplicatedSignature**

  15분 안에 동일한 signature 값
  
  HTTP Status Code: 403

공통적으로 일어날 수 있는 오류 코드를 확인하시려면 :doc:`errors` 를 참고하세요.

Sample Request
--------------

.. code-block:: http

  POST /GroupMessage/createGroup HTTP/1.1
  Content-Length: 0
  Content-Type: application/json
  Authorization: HMAC-SHA256 apiKey=NCSJHQYTPNB4DHEB, date=2017-06-05T11:51:10+09:00, salt=5934c71e3b980, signature=6db985f72ebfbe3c1c3a88c1fd8b9af7dec0d24caafec9c98213104591c2ea52
