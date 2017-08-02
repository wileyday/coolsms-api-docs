---
weight: 10
title: API Credentials
---

# API Key 관리

REST API 호출을 통해 API Key 생성, 삭제, Secret Key 재생성 등 관리 할 수 있습니다.

## API Key 생성

### Resource URL

`POST https://solapi.com/credentials/createCredential`

### Request Parameters

필수 입력 파라메터가 없습니다.

> Request Syntax

```
{}
```

> Request Sample

```bash
curl "https://solapi.com/credentials/createCredential"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/createCredential",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  }
)
```
```python
import urllib.request

url = 'https://solapi.com/credentials/createCredential'
values = {}
headers = { 'Authorization': 'USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913' }

data = urllib.parse.urlencode(values)
req = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(req)
the_page = response.read()
```


### Response Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key 가 리턴됩니다.
apiSecret | - | secret key 가 리턴됩니다.


> Response Syntax

```json
{
  "apiKey": "String",
  "apiSecret": "String"
}
```

> Response Sample

```json
{
  "apiKey": "NCSOGH0TB3PDIGV1",
  "apiSecret": "UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49B"
}
```
## 정보 조회

`POST https://solapi.com/credentials/getCredentialInfo`

### Request Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | 조회 할 API Key를 입력 합니다.

> Request Syntax

```json
{
  "apiKey": "String"
}
```

> Request Sample

```bash
curl "https://solapi.com/credentials/getCredentialInfo"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/getCredentialInfo",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  },
  json: {
    "apiKey": "NCSOGH0TB3PDIGV1"
  }
)
```
```python
import urllib.request

url = 'https://solapi.com/credentials/getCredentialInfo'
values = { 'apiKey': 'NCSOGH0TB3PDIGV1' }
headers = { 'Authorization': 'USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913' }

data = urllib.parse.urlencode(values)
req = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(req)
the_page = response.read()
```

### Response Parameters

Parameter | Default | Description
--------- | ------- | -----------
accountId | - | account id가 리턴됩니다.
apiKey | - | public key가 리턴됩니다.
apiSecret | - | secret key가 리턴됩니다.
credentialStatus | - | active 혹은 inactive가 리턴됩니다.
dateCreated | - | 생성일시가 리턴됩니다.
userId | - | 사용자 ID가 리턴됩니다.

> Response Syntax

```json
{
  "apiKey": "String",
  "apiSecret": "String",
  "credentialStatus": "String",
  "dateCreated": "Date",
}
```
> Response Sample

```json
{
  "apiKey": "NCSOGH0TB3PDIGV1",
  "apiSecret": "UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49B",
  "credentialStatus": "active",
  "dateCreated": "2017-07-02T13:20:22.784Z",
}
```
## Secret Key 재생성

### Resource URL

`POST https://solapi.com/credentials/regenerateSecretKey`

### Request Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | Secret Key를 재생성할 API Key 입력

> Request Syntax

```json
{
  "apiKey": "String"
}
```

> Request Sample

```bash
curl "https://solapi.com/credentials/regenerateSecretKey"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/regenerateSecretKey",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  },
  json: {
    "apiKey": "NCSOGH0TB3PDIGV1"
  }
)
```
```python
import urllib.request

url = 'https://solapi.com/credentials/regenerateSecretKey'
values = { "apiKey": "NCSOGH0TB3PDIGV1" }
headers = { 'Authorization': 'USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913' }

data = urllib.parse.urlencode(values)
req = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(req)
the_page = response.read()
```


### Response Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key 가 리턴됩니다.
apiSecret | - | secret key 가 리턴됩니다.

> Response Syntax

```json
{
  "apiKey": "String",
  "apiSecret": "String"
}
```

> Response Sample

```json
{
  "apiKey": "NCSOGH0TB3PDIGV1",
  "apiSecret": "UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49B"
}
```

## 목록 조회

### Resource URL

`POST https://solapi.com/credentials/getCredentialList`

### Request Parameters

필수 입력 파라메터가 없습니다.

> Request Syntax

```json
{
}
```

> Request Sample

```bash
curl "https://solapi.com/credentials/getCredentialList"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/getCredentialList",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  }
)
```
```python
import urllib.request

url = 'https://solapi.com/credentials/getCredentialList'
values = {}
headers = { 'Authorization': 'USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913' }

data = urllib.parse.urlencode(values)
req = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(req)
the_page = response.read()
```


### Response Parameters

> Response Syntax

```json
{
  "credentials": {
    "String(apiKey)": {
      "apiSecret": "String",
      "credentialStatus": "String",
      "dateCreated": "Date",
    },
	...
  }
}
```

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key가 리턴됩니다.
apiSecret | - | secret key가 리턴됩니다.
credentialStatus | - | active 혹은 inactive가 리턴됩니다.
dateCreated | - | 생성일시가 리턴됩니다.

> Response Sample

```json
{
  "credentials": {
    "NCSOGH0TB3PDIGV1": {
      "apiSecret": "UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49B",
      "credentialStatus": "active",
      "dateCreated": "2017-07-02T13:19:46.702Z",
    },
    "NCSRPB685VXTOWLA": {
      "apiSecret": "YK77YTAGT1YWUORCGLAZNCSQE7JMOI8O",
      "credentialStatus": "inactive",
      "dateCreated": "2017-07-02T13:20:22.784Z",
    }
  }
}
```
## 상태 업데이트

### Resource URL

`POST https://solapi.com/credentials/updateCredentialStatus`

### Request Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key 입력
credentialStatus | - | active, inactive 중에 하나 입력


> Request Syntax

```json
{
  "apiKey": "String",
  "credentialStatus": "String"
}
```

> Request Sample

```bash
curl "https://solapi.com/credentials/updateCredentialStatus"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/updateCredentialStatus",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  },
  json: {
    "apiKey": "NCSOGH0TB3PDIGV1",
    "credentialStatus": "inactive"
  }
)
```
```python
import urllib.request

url = 'https://solapi.com/credentials/updateCredentialStatus'
values = {}
headers = { 'Authorization': 'USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913' }

data = urllib.parse.urlencode(values)
req = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(req)
the_page = response.read()
```


### Response Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key 가 리턴됩니다.
apiSecret | - | secret key 가 리턴됩니다.


> Response Syntax

```json
{
  "apiKey": "String",
  "resultCode": "String"
}
```

> Response Sample

```json
{
  "apiKey": "NCSOGH0TB3PDIGV1",
  "resultCode": "Success"
}
```
## 삭제

### Resource URL

`POST https://solapi.com/credentials/deleteCredential`

### Request Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | 삭제할 API Key 입력

> Request Syntax

```json
{
  "apiKey": "String"
}
```

> Request Sample

```bash
curl "https://solapi.com/credentials/deleteCredential"
  -H "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
```
```javascript
request(
  "https://solapi.com/credentials/deleteCredential",
  headers: {
    "Authorization: USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913"
  }
)
```
```python
import urllib.request

url = 'https://solapi.com/credentials/deleteCredential'
values = {}
headers = { 'Authorization': 'USER user_id=example, date=2017-08-01 11:01:07, salt=salt=597fe0e36daeb, signature=fd96c1931e947aef14c963b67763c913' }

data = urllib.parse.urlencode(values)
req = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(req)
the_page = response.read()
```


### Response Parameters

Parameter | Default | Description
--------- | ------- | -----------
apiKey | - | public key 가 리턴됩니다.
resultCode | - | 결과코드가 리턴됩니다.


### resultCode 리턴가능한 값

**Success**

  성공

  HTTP Status Code: 200

**ResourceNotFound**

  존재하지 않는 API Key

  HTTP Status Code: 404


> Response Syntax

```json
{
  "apiKey": "String",
  "resultCode": "String"
}
```

> Response Sample

```json
{
  "apiKey": "NCSOGH0TB3PDIGV1",
  "resultCode": "Success"
}
```

