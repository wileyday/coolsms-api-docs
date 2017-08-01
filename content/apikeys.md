---
weight: 10
title: API Credentials
---

# API Key 관리

REST API 호출을 통해 API Key 생성, 삭제, Secret Key 재생성 등 관리 할 수 있습니다.

## API Key 생성

### Resource URL

`POST https://solapi.com/credentials/create`

### Request Parameters

필수 입력 파라메터가 없습니다.

> Example Request

```json
{
}
```

### Response Parameters


Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key 가 리턴됩니다.
apiSecret | - | secret key 가 리턴됩니다.


> Example Response

```json
{
  "apiKey": "NCSOGH0TB3PDIGV1",
  "apiSecret": "UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49B"
}
```


```shell
curl "https://solapi.com/credentials/create"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/create",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  }
)
```
