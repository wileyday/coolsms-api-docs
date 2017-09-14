## 그룹 삭제
생성된 그룹을 삭제하며 해당 그룹에 등록된 모든 메시지도 함께 제거됩니다.

### Resource URL
`https://solapi.com/GroupMessage/3/deleteGroups`

### Request Syntax

```syntax
{
  "groups": [
    {
      "groupId": "String"
    },
    ...
  ],
}
```

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
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/GroupMessage/3/deleteGroups");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
 'Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[UNIQID], Signature=[SIGNATURE]'
));
curl_setopt($ch, CURLOPT_POSTFIELDS, '{"groups" : [{"groupId": "[GROUP_ID]"}]}');
curl_exec($ch);
curl_close($ch);
```

### Required Parameters
%include 0 ../fragments/groups.md

### Optional Parameters
옵션사항이 없습니다

### Limits
하나의 요청에 삭제할 수 있는 그룹 수는 최대 10개 입니다.

### Response Syntax

```syntax
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

errorCount
  : 오류 발생 건수

%include 0 ../fragments/resultList.md
%include 0 ../fragments/errors.md
: TooManyGroups
  : 입력 가능한 그룹 수 10개를 초과하였습니다.
  : HTTP Status Code: 413

