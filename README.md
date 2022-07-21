## **테이블링 예약 시스템**
<br>

### **서비스 1줄 소개**

- 웹을 이용하여 간편하게 식당 예약을 도와주는 서비스입니다.

### **서비스 설명**

<aside>
💡 **참고 사이트**
1. 카카오톡 오픈 사이트 → [링크](https://apis.map.kakao.com/web/guide/)<br>
2. 명세서 스프레드시트 → [링크](https://docs.google.com/spreadsheets/d/18wSjjrUqZakAKz6wTBfXr6sPJwrnJSJTrbowwTkci1I/edit#gid=0)<br>
3. 백엔드 postman API문서 참고 → [링크](https://documenter.getpostman.com/view/20983410/UzQyrivc)<br>
4. 프론트엔드 참고용 스프레드시트 → [링크](https://docs.google.com/spreadsheets/d/1aB1nduQKlt8cXUSGFr8vmTy1qOf7QQ4I3orFLLGHbSA/edit#gid=0)<br>

</aside>

### 1. 기획 의도, 목적

- 최근 골목식당 컨셉의 식당이 주를 이루게 되면서 갈만한 식당들은 대기가 1시간씩 걸리는 경우가 대부분입니다. 이런 소비자들의 불편함을 조금이나마 해소하기 위해 식당 시간 예약 서비스를 만들게 되었습니다.

- 해당 서비스를 이용하면 소비자들이 덥거나 추운 날씨에 밖에서 굳이 오랜시간 기다리거나 하지 않고 가서 바로 식당을 이용할 수 있을 것이라 기대합니다.

### 2. 웹 서비스의 주제 및, 최종적인 메인 기능과 서브 기능 설명

- 주제 : 식당 예약 서비스
- 메인 기능
1. manager는 본인의 식당을 등록하고 위치, 메뉴 등을 입력한다. 
2. customer가 예약하고 싶은 날짜와 시간, 인원, 지역을 정해 예약가능한 식당을 보여준다.
3. customer는 예약한 식당의 지도를 확인하고 카카오톡으로 예약완료 알림을 받는다.
- 서브 기능
1. 메인 화면에 새로 등록된 가게 6종을 보여준다.
2. 관리자는 모든 회원, 모든 가게, 모든 예약을 확인하고 관리한다. (수정, 삭제)
3. SNS 로그인 기능이 있다.



### 3. 사용 기술 스택

- 사용 스택
    - 프론트엔드
        - React
    
    - 백엔드
        - Express, Node
    
- 와이어프레임 (Figma 등 링크 삽입)
- 스토리보드 및 유저 시나리오
    - 홈 화면에서 어떤 버튼을 클릭하여 어떤 페이지로 이동할 수 있다.
    - 이 버튼을 클릭하면 이런 웹 서비스가 실행된다.

### 5. 구성원 역할

김다영 : FE - 팀장
정민희 : FE
전형빈 : FE
오경찬 : BE
박태훈 : BE


### 6. 데이터 설계

[데이터 설계 관련 문서 작성 링크 :](https://docs.google.com/spreadsheets/d/18wSjjrUqZakAKz6wTBfXr6sPJwrnJSJTrbowwTkci1I/edit?usp=sharing)
