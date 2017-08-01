---
weight: 20
title: 잔액정보 가져오기
---

# 잔액정보

이 API는 Authentication Info를 제외한 Parameters가 필요 없습니다.

유저의 잔액정보를 가져옵니다.

```json
{
  "data": {
    "member_srl": "382492", // 사용자 번호 
    "user_id": "testsy1", // 사용자 아이디
    "cash": "0", // 남은 캐쉬 
    "point": "98843", // 남은 포인트 
  }
}
```

> Http Status Code가 200일 경우 성공 아니라면 'errorMessage'값을 확인한다.

```json
{
  "errorMessage": 'parameter is empty'
}
```
