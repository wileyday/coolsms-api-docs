## 그룹메시지 추가
그룹에 발송할 메시지를 추가합니다.

### Resource URL
`https://solapi.com/GroupMessage/3/group/{groupId}/addMessages`

### Request Syntax

```syntax
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
<?php
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
### Required Parameters

%include 0 ../fragments/messagesRequired.md

### Optional Parameters

%include 0 ../fragments/messagesOptional.md
%include 0 ../fragments/messagesLimit.md

### Response Syntax

```syntax
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
%include 0 ../fragments/errorCount.md
%include 0 ../fragments/resultList.md
%include 0 ../fragments/messageResultList.md
%include 0 ../fragments/errors.md
  : RecipientsTooMany
    : 입력된 수신번호가 1000개를 넘음
    : HTTP Status Code: 413


