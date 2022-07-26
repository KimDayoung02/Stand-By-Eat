function KakaoLogin() {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const kakaoLoginButton = document.querySelector('#kakaoLoginButton');
  initializeKakaoButton();
  // 카카오 로그인 api
  // init 관련 문서: https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js
  // 팝업 관련 문서: https://developers.kakao.com/docs/latest/ko/kakaologin/js#advanced-guide
  function initializeKakaoButton() {
    Kakao.init('2da72af02ec112615d67ee3f96804b55');

    kakaoLoginButton.addEventListener('click', (e) => {
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
    Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: ['kakao_account.email'],
      },
      success: handleKakaoData,
      fail: (err) => console.log(err),
    });
  }

  async function handleKakaoData(data) {
    // 사용자 데이터 추출
    const { email } = data.kakao_account;

    // 회원가입 api 요청
    try {
      const data = { email };

      const result = await Api.post('/api/login/kakao', data);

      const token = result.token;

      // 로그인 성공, 토큰을 세션 스토리지에 저장
      // 단, 개발 중에는 편의상 localStorage에 저장
      sessionStorage.setItem('token', token);

      alert(`정상적으로 로그인되었습니다.`);

      // 로그인 성공

      // 기존 다른 페이지에서 이 로그인 페이지로 온 경우, 다시 돌아가도록 해 줌.
      // const { previouspage } = getUrlParams();

      // if (previouspage) {
      //   window.location.href = previouspage;

      //   return;
      // }

      // 기존 다른 페이지가 없었던 경우, 그냥 기본 페이지로 이동
      window.location.href = '/';
    } catch (err) {
      console.error(err.stack);
      alert(
        `문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`,
      );
    }
  }

  return (
    <div className="oauth-kakao" id="kakaoLoginButton">
      <img
        src="https://i.ibb.co/1qLp06t/image.png"
        width="200"
        height="40"
        alt="카카오 로그인 버튼"
      />
    </div>
  );
}

export default KakaoLogin;
