```bash
$ curl -X POST https://solapi.com/ScheduledMessage/3/cancelScheduledMessages \
    --header "Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]" \
    -d '{
          "messages": [
            {
              "messageId": "[MESSAGE-ID]"
            }
          ]
        }'
```

```javascript
request(
  {
    url: "https://solapi.com/ScheduledMessage/3/cancelScheduledMessages",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]`
    },
    json: {
      "messages": [
        {
          "messageId": "[MESSAGE-ID]"
        }
      ]
    }
  }
)
```

```python
conn = HTTPSConnection('solapi.com', '443')
conn.request(
  "POST",
  "/ScheduledMessage/3/cancelScheduledMessages",
  json.dumps(
    {
      "messages": [
        {
          "messageId": "[MESSAGE-ID]"
        }
      ]
    }
  ),
  {"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]"})
conn.close()
```

```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/ScheduledMessage/3/cancelScheduledMessages");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATA], Salt=[SALT], Signature=[SIGNATURE])');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(
  {
    "messages": [
      {
        "messageId": "[MESSAGE-ID]"
      }
    ]
  }
));
curl_exec($ch);
curl_close($ch);
```
