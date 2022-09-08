# <img src="https://user-images.githubusercontent.com/100933263/188952079-4d156e7e-ce0e-4410-a19f-465a72f4c1b7.png" height="35"/> Justgram 프로젝트

소셜 네트워크 서비스(SNS) [instagram](https://www.instagram.com/) 클론하는 프로젝트  
<img width="350" alt="인스타그램" src="https://cdn.pixabay.com/photo/2018/03/28/02/19/illustration-3268055_1280.jpg">

## Introduction

- 개발 기간 | 2022-09-01 ~ 2022-09-08
- instagram의 login & home 컴포넌트 구현하기

  ## 1. Login Page
  ![justgram-login](https://user-images.githubusercontent.com/100933263/189027547-e71f8b30-4722-42df-a34f-e90ded0f8ea0.gif)

  #### 1) 로그인 페이지 레이아웃
    - 실제 instagram 로그인 페이지 참고하여 디자인  

  #### 2) ID, PW validation
    - 정규식을 사용을 사용하여 아래의 조건에 맞으면 버튼 활성화 되도록 하기.
      - id 조건 : 이메일 형식 [ ﹖ + @ + ﹖ + . + ﹖ ]  
        ```const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;```  
      - PW 조건 : 최소8자 최대 10자, 하나 이상의 숫자와 하나이상의 특수문자 포함.  
        ```const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;```
    
  #### 3) ID, PW 입력 시 로그인 버튼 활성화 기능
  <img src="https://user-images.githubusercontent.com/100933263/189029497-59013cfa-215c-4474-8586-9427ce953802.png" height="300"/>  
  
    - onChange 이벤트 시, ID와 PW를 빈string('')으로 state를 만들고 input창에 입력값을 setState로 바꿔주기.
    - id, pw 에 조건이 맞으면 버튼이 활성화. (비활성화:연한 파란색 -> 활성화:파란색)
    - 버튼 클릭 시, alert창 띄우고 home 페이지로 이동.

  ## 2. Home Page
  ![justgram-home](https://user-images.githubusercontent.com/100933263/189091013-2d35e3fe-7a79-4564-92aa-211274789580.gif)

  #### 1) 홈 페이지 레이아웃
    - 실제 instagram 홈 페이지 참고하여 디자인  
  
  #### 2) Mock data 활용
    - Mock data 만들고, fetch하여 data를 setState로 배열에 담기

      <details>
      <summary>Mock data 더보기</summary>

        ```
      // data.json
        [
          {
            "id": 1,
            "user": {
              "name": "sophie0527",
              "image": "https://photo-cdn2.icons8.com/SYIu_ZIL0mGfZdevQ6s5QZXlo3d1JFIDsuiTNYoiQ4Q/rs:fit:716:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTM1L2I3Zjk4/YzBhLTg2NWUtNDYz/My04YmE5LTdjMzQx/MWIxODE1OC5qcGc.jpg"
            },
            "feedImage": "https://photo-cdn2.icons8.com/HkhkWo5xsmPiV5jYUK4TNSTrwreIH7vYV0rW7QHDC94/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi80NzQ3YmJiMGFi/Y2I0OWE0OTEzMDM3/MzRjYmJmZDQ3OC5q/cGc.jpg",
            "isLiked": false,
            "likeUser": {
              "name": "Ted_88",
              "image": "https://photo-cdn2.icons8.com/KQG1tldVmhm7k1T2FRi1KCXBzBwEe_fhtw4VETFPZRM/rs:fit:714:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg",
              "likes": 30
            },
            "date": "2022-05-27 18:41",
            "content": "저의 베스킨라빈스 최애는 아몬드봉봉입니다!!",
            "commentList": [
              {
                "id": 1,
                "name": "jayPark",
                "content": "looks so delicious😋",
                "isLiked": false
              },
              ... (생략)
        ]
        ```
      </details>

    
  #### 3) 여러개의 피드 구현 
    - fetch한 data를 mapping하여 여러개의 피드 보여주기.
  
  #### 4) 피드 좋아요 버튼 구현
  <img src="https://user-images.githubusercontent.com/100933263/189093943-d09584ce-eab2-4b2c-8914-b04f0966b072.png" />  

    - fetch해서 가져온 isLiked의 값(boolean)으로 state를 만든 후 onClick 이벤트 시(♡ 아이콘 클릭), setState로 반대 값으로 바꿔주기. 
    - state가 바뀌면 색상과 아이콘 이미지 변경 (false:검정색 빈하트 -> true: 빨강색 꽉찬하트)
  
  #### 5) 댓글 구현
  <img src="https://user-images.githubusercontent.com/100933263/189099108-8dbb81fc-ab51-46df-8e98-14fa0a249c68.gif" height="200"/>  

    - 피드 댓글 내용 입력 후 Enter press, 혹은 '게시' 버튼 클릭 시 댓글 추가
    - 빈string('')으로 state를 만들고 input창의 입력 값으로 setState 변경하는 useState 만들기.
    - 목데이터에서 commentList의 객체와 같은 객체를 state로 지정한 useState 만들기.
    - onChange 이벤트 시, setState(input창의 입력 값)를 입력값으로 바꾸고 객체로 만든 state에서 content값을 입력 값으로 지정하여, commentList 데이터의 id값을 +1 추가하고 입력된 객체 만들어 두기.
    - Enter press 또는 '게시' 버튼 클릭 시, 앞어 만들어둔 객체를 commentList 데이터에 추가하고 input창과 담아둔 객체을 초기화됨. 
    
  #### 6) '게시'버튼 활성화 조건 (validation)
  ![게시버튼 비활성화 활성화](https://user-images.githubusercontent.com/100933263/189100253-f34364ab-71fe-418b-a974-231a73c8752a.png)

    - 댓글 input창에 글자가 1자 이상 이라면, '게시'버튼 활성화 되도록 하기.(비활성화:연한 파란색 -> 활성화:파란색)
    - 버튼 클릭 또는 엔터 시, 댓글 등록.

  #### 7) 피드 댓글 좋아요 버튼 구현
  <img src="https://user-images.githubusercontent.com/100933263/189101651-f9e3acae-7214-470f-b619-688bd024283e.gif" height="200"/>  

    - onClick 이벤트 시, commentList.isLiked의 값(boolean)을 바꿔주기.
    - commentList.isLiked가 true면 토마토색+꽉찬하트, false면 검정색+빈하트.

  #### 8) 피드 댓글 삭제 기능 구현
  <img src="https://user-images.githubusercontent.com/100933263/189101922-9eb37e64-fa6e-498e-bcb8-725eb8da3e67.gif" height="200"/>  

    - onClick 이벤트 시, commentList 데이터의 배열에서 해당 인덱스 1개를 제거한다.
  
  #### 9) 피드 글 일부분만 숨기기/보여주기 기능 구현
  <img src="https://user-images.githubusercontent.com/100933263/189102555-bcbfde3f-b4a0-448c-a9b2-f447ed243917.gif" height="200"/>  

    - 피드 글의 길이를 12까지만 보여주기. / '더보기' 버튼 클릭 시, 글 전체 보여주고 더보기 버튼 숨기기.
  
  #### 10) '스토리'와 '회원님을 위한 추천' 구현 
  <img src="https://user-images.githubusercontent.com/100933263/189103346-1f8145c2-b9f8-420e-9cf0-1205d5c9c6fa.gif" height="500"/>  

    - User mock data 만들고, fetch하여 data를 setState로 배열에 담기.
    
      <details>
      <summary>User mock data 더보기</summary>

        ```
      // user.json
        [
          {
            "id": 1,
            "userName": "sophie0527",
            "name": "s_소희_🍊",
            "image": "https://photo-cdn2.icons8.com/SYIu_ZIL0mGfZdevQ6s5QZXlo3d1JFIDsuiTNYoiQ4Q/rs:fit:716:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTM1L2I3Zjk4/YzBhLTg2NWUtNDYz/My04YmE5LTdjMzQx/MWIxODE1OC5qcGc.jpg",
            "time": 36,
            "follow": true
          },
          {
            "id": 2,
            "userName": "Ted_88",
            "name": "제갈창민",
            "image": "https://photo-cdn2.icons8.com/KQG1tldVmhm7k1T2FRi1KCXBzBwEe_fhtw4VETFPZRM/rs:fit:714:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg",
            "time": 29,
            "follow": true
          },
              ... (생략)
        ]
        ```
      </details>
    - '스토리', '회원님을 위한 추천' 조건에 맞게 구현.
      - '스토리' : user의 time이 30보다 작을 경우로 filter하고 mapping하여 보여주기.
      - '회원님을 위한 추천' : user의 follow가 false인 경우로 filter하고 mapping하여 보여주기
    - 모두보기 글자 클릭 시, Container 높이 늘려서 전부 보여주기.
  
  ## 3. Header
  ![헤더](https://user-images.githubusercontent.com/100933263/189106752-7a63048b-8361-4883-8a60-9589f41cf893.gif)

  #### 1) 아이디 검색 기능
    - nav 검색 input창 클릭 시 검색 박스 생성.
    - 검색 input창에 입력된 값으르 setState로 바꿔주기.
    - input 값에 name, userName이 포함된 것으로 filter한 데이터를 mapping하여 보여주기.
    
  #### 2) nav 프로필 사진 클릭 시 메뉴 박스 생성
    - 메뉴박스에서 로그아웃 클릭 시 로그인 페이지로 이동.

  ## 4. 반응형 구현
  ![반응형](https://user-images.githubusercontent.com/100933263/189108997-a0af86fb-2b67-4317-83e5-f62365a897d9.png)

    - media-query로 desktop,tablet,mobile에 맞게 반응형 구현

## Technlogies

 <div> 
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div> 
<br>

## Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)
