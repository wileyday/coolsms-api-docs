## 그룹 정보
그룹 정보를 리턴합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/group/{groupId}/getGroupInfo`

### Request Syntax
```syntax
{
  //입력 사항이 없습니다. 
}
```

> Request Sample

```bash
$ curl -X POST https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getGroupInfo \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[ISO 8601 DATE], Salt=[UNIQID], Signature=[SIGNATURE]"
```
```javascript
request({
    url: "https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getGroupInfo",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]`
    },
    json: {}
})
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

### Required Parameters
필수 입력 사항이 없습니다.

### Optional Parameters
선택 입력 사항이 없습니다.

<br>
<br>

### Response Syntax

```syntax
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

%include 0 ../fragments/groupId.md
%include 0 ../fragments/groupOptions.md
%include 0 ../fragments/count.md
%include 0 ../fragments/price.md
%include 0 ../fragments/ttl.md
%include 0 ../fragments/errors.md
: ResourceNotFound
  : 존재하지 않는 그룹, 이미 TTL 시간이 만료되었거나 올바르지 않은 그룹아이디를 입력
  : HTTP Status Code: 404
