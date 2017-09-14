messageList
  : 메시지ID를 Key로 한 Map 형식의 메시지 목록이 리턴됩니다.
  : messageId
    : [메시지의 고유 ID](#)
    : to
      : 메시지를 받는 사람의 전화번호인 [수신번호](#)

%include 6 ./from.md
%include 6 ./country.md
    : type
      : 타입
    
%include 6 ./text.md
%include 6 ./scheduledDate.md

    : statusCode
      : 메시지의 상태를 나타내는 4자리의 숫자로 구성된 코드입니다. [메시지상태코드](#) 에서 코드 목록을 확인하실 수 있습니다.
