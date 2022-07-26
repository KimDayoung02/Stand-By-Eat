function KakaoRegister() {
  const kakaoRegisterButton = document.querySelector('#kakaoRegisterButton');
  initializeKakaoButton();
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // 카카오 로그인 api를 회원가입에 사용
  // init 관련 문서: https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js
  // 팝업 관련 문서: https://developers.kakao.com/docs/latest/ko/kakaologin/js#advanced-guide
  function initializeKakaoButton() {
    Kakao.init('2da72af02ec112615d67ee3f96804b55');

    kakaoRegisterButton.addEventListener('click', (e) => {
      e.preventDefault();

      Kakao.Auth.login({
        success: handleKakaoLogin,
        fail: (err) => console.log(err),
      });
    });
  }

  // "카카오로 시작하기" 버튼 누르고 동의 진행한 사용자의 정보를 가져옴
  // 문서: https://developers.kakao.com/docs/latest/ko/kakaologin/js#req-user-info
  function handleKakaoLogin() {
    console.log(
      Kakao.API.request({
        url: '/v2/user/me',
        data: {
          property_keys: ['kakao_account.email', 'kakao_account.profile'],
        },
        success: handleKakaoData,
        // success : alert("성공"),
        fail: (err) => console.log(err),
      }),
    );
  }

  async function handleKakaoData(data) {
    // 사용자 데이터 추출
    const { email, profile } = data.kakao_account;
    const { nickname } = profile;

    // 회원가입 api 요청
    try {
      const data = { nickname, email };

      await Api.post('/api/register/kakao', data);

      alert(`정상적으로 회원가입되었습니다.`);

      // 로그인 페이지 이동
      window.location.href = '/login';
    } catch (err) {
      console.error(err);
      alert(
        `문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`,
      );
    }
  }
  return (
    <div className="oauth-kakao" id="kakaoRegisterButton">
      <img
        src="https://i.ibb.co/hHgdJkc/image.png"
        width="200"
        height="40"
        alt="카카오 회원가입 버튼"
      />
    </div>
  );
}

export default KakaoRegister;
