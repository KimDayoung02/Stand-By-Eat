// import initializeKakaoButton from './kakao';
// import { useEffect, useState } from 'react';
function KakaoRegister() {
  //   useEffect(initializeKakaoButton());
  //   initializeKakaoButton();
  return (
    <>
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <div className="oauth-kakao" id="kakaoRegisterButton">
        <img
          src="https://i.ibb.co/hHgdJkc/image.png"
          width="200"
          height="40"
          alt="카카오 회원가입 버튼"
        />
      </div>
    </>
  );
}

export default KakaoRegister;
