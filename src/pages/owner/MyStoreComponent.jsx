import './../../styles/OwnerStore.css';

function MyStoreComponent({ store }) {
  console.log(store);

  return (
    <div className="myStore-container">
      <h3>가게 목록</h3>
      <div>
        <MyStoreData storeList={store} />
      </div>
    </div>
  );
}

function MyStoreData({ storeList }) {
  return (
    <div className="storesList-container">
      <AddStore />
      <h4>등록된 가게 리스트</h4>
      {storeList.length == 0 ? (
        <>등록된 가게가 없습니다</>
      ) : (
        <>
          {storeList.map((e) => {
            return (
              <div className="storeList-container">
                <div className="store-img-compont">
                  <img src={e.picture[0]} style={{ width: '10%' }} />
                </div>
                <div className="store-info-component">
                  <div>가게 이름 : {e.storeName}</div>
                  <div>예약 정보 : {e.storeName}</div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

function AddStore() {
  return <>가게 등록하기</>;
}
export default MyStoreComponent;
