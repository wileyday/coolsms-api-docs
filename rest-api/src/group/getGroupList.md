## 그룹 목록
생성된 그룹목록을 리턴합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/getGroupList`

### Request Syntax

```syntax
{
  "offset": Number,
  "limit": Number
}
```

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

### Required Parameters
필수 입력 사항이 없습니다.

### Optional Parameters
%include 0 ../fragments/offset.md
%include 0 ../fragments/limit.md

### Response Syntax

```syntax
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

> Response Sample

```json
{
    "offset": 0,
    "limit": 20,
    "groupList": {}
}
```

%include 0 ../fragments/totalCount.md
%include 0 ../fragments/offset.md
%include 0 ../fragments/limit.md
%include 0 ../fragments/groupList.md
%include 0 ../fragments/errors.md
