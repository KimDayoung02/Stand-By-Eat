/*global kakao*/
function KaKaoMap(lan, lon) {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(lan, lon),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  // 마커가 표시될 위치입니다
  const markerPosition = new kakao.maps.LatLng(lan, lon);
  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}

export default KaKaoMap;
