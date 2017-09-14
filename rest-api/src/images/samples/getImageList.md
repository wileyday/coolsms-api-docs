```bash
$ curl -X POST https://solapi.com/images/3/getImageList \
    --header "Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]" \
    -d '{
          "offset": 0,
          "limit": 20
        }'
```

```javascript
request(
  {
    url: "https://solapi.com/images/3/getImageList",
    method: 'post',
    headers: {
      'Authorization': `HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]`
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
conn.request(
  "POST",
  "/images/3/getImageList",
  json.dumps(
    {
      "offset": 0,
      "limit": 20
    }
  ),
  {"Authorization":"HMAC-SHA256 ApiKey=[API_KEY], Date=[DATE], Salt=[SALT], Signature=[SIGNATURE]"})
conn.close()
```

```php
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://solapi.com/images/3/getImageList");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: HMAC-SHA256 ApiKey=[API_KEY], Date=[DATA], Salt=[SALT], Signature=[SIGNATURE])');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(
  {
    "offset": 0,
    "limit": 20
  }
));
curl_exec($ch);
curl_close($ch);
```
