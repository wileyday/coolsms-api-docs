## 그룹메시지 목록
그룹에 추가된 문자메시지 목록을 조회합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/group/{groupId}/getMessageList`

### Request Syntax

```syntax
{
  "offset": Number,
  "limit": Number
}
```

> Request Sample
```bash
$ curl -X POST https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getMessageList \
    --header "Authorization : HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]" \
    -d '{"offset": 0,"limit": 20}'
```
```javascript
request(
  {
    url: "https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getMessageList",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE]}, Salt=[UNIQID], Signature=[SIGNATURE]`
    },
    json: {
      "offset": 0,
      "limit": 20
    }
  }
)
```
```python
conn = HTTPSConnection('solapi.com', '443')
conn.request("POST","/GroupMessage/3/group/[GROUP_ID]/getMessageList",'{"offset": 0,"limit": 2}',{"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]"})
conn.close()
```
```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/group/[GROUP_ID]/getMessageList");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
 'Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]'
));
curl_setopt($ch, CURLOPT_POSTFIELDS, '{"offset": 0,"limit": 20}');
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
  "messageList": {
    "messageId": {
      "to": "String",
      "from": "String",
      "country": "String",
      "type": "String",
      "text": "String",
      "scheduledDate": "String",
      "statusCode": "String"
    },
    ...
  }
}
```

> Response Sample
```json
{
    "totalCount": 1,
    "offset": 0,
    "limit": 20,
    "messageList": {
        "M3V20170911170756D7NNY9AARGNB6BG": {
            "to": "01000000001",
            "from": "0212345678",
            "text": "테스트 문자",
            "type": "AUTO",
            "statusCode": "2000"
        }
    }
}
```
%include 0 ../fragments/totalCount.md
%include 0 ../fragments/offset.md
%include 0 ../fragments/limit.md
%include 0 ../fragments/messageList.md
%include 0 ../fragments/errors.md
